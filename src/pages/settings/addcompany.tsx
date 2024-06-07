import React, { useState } from 'react'
import '../../app/globals.css'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import Head from 'next/head'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import apiCall from '@/utils/apiCall'

const addcompany = () => {
    const [companyData, setFormData] = useState({
        company_name: '',
        company_website: '',
        contact_number: '',
        contact_email: '',
        company_logo: null,
        company_description:''
    })

    const handleSubmit = async() => {
        const fd = new FormData()
        fd.append('company_name', companyData.company_name)
        fd.append('company_website', companyData.company_website)
        fd.append('company_description', companyData.company_description)
        fd.append('contact_number', companyData.contact_number)
        fd.append('contact_email', companyData.contact_email)
        const company_logo = document.getElementById('company-logo') as HTMLInputElement
        if( company_logo.files && company_logo.files?.length > 0)
            fd.append('company_logo', company_logo.files[0])

        const data = await apiCall('company', 'post', fd, true)
        console.log(data)
    }

    return (
    <><div className='settings-pg'>
            <div className='hidden'>
                <SideNav />
            </div>
            <Head>
                <title>Add Company</title>
            </Head>
            <div id="video-post-container" className="py-5">
                <span className='settings-profile'>
                    <Link href={'/settings'}>
                        <div className='settings-back'>
                            <IoChevronBackCircleOutline className='mt-[1px]'/> 
                            <span>Back</span>
                        </div>
                    </Link>
                </span>
                <div className='text-center'>
                    <h4 className='font-semibold'>Add a company</h4>
                </div>
                <div className='p-2'>
                    <div className='settings-page'>
                        <p className='company-title'>Enter your Company details here</p> 
                        <div className="input">
                            <form>
                            <div className='mt-3'>
                                <label htmlFor="" className='text-sm font-semibold'>Company name</label>
                                <input type="text"
                                className='settings-ph'
                                placeholder='Enter a company name'
                                onChange={(e)=>{
                                    setFormData({...companyData, company_name: e.target.value})
                                }}
                                />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='text-sm'>Company logo</label>
                                <input type="file"
                                className='settings-ph'
                                id='company-logo'
                                />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='text-sm'>Company website</label>
                                <input type="text" 
                                className='settings-ph'
                                placeholder='Enter a company website'
                                onChange={(e)=>{
                                    setFormData({...companyData, company_website: e.target.value})
                                }}
                                />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='text-sm'>Mobile Number</label>
                                <input type="text" 
                                className='settings-ph'
                                placeholder='Enter your Mobile Number'
                                onChange={(e)=>{
                                    setFormData({...companyData, contact_number: e.target.value})
                                }}
                                />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='text-sm'>Email</label>
                                <input type="text" 
                                className='settings-ph'
                                placeholder='Enter your E-mail'
                                onChange={(e)=>{
                                    setFormData({...companyData, contact_email: e.target.value})
                                }}
                                />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='text-sm'>Company description</label>
                                <textarea name="" id="" cols={30} rows={10}
                                className='settings-ph'
                                placeholder='Enter a company description'
                                onChange={(e)=>{
                                    setFormData({...companyData, company_description: e.target.value})
                                }}
                                ></textarea>
                            </div>
                            <p className='text-xs opacity-90'> By clicking the Save button a new company will be created and you 
                                can post videos and images </p>
                            <div className='save-button'>
                                <button className='save-btn'
                                onClick={handleSubmit}
                                type='button'>Save</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default addcompany