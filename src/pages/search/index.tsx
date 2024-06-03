import SideNav from '@/components/SideNav';
import '../../app/globals.css';
import SearchPosts from '@/components/search/SearchPosts';
import TrendingCarousel from '@/components/TrendingCarousel';
import SearchProfile from '@/components/search/SearchProfile';
import { useSearchParams } from 'next/navigation';


function MyComponent() {
  const searchParams = useSearchParams();
  const searchInputFocus = (searchParams?.get('search'));
  if(searchInputFocus){
    document.getElementById('type-search')?.focus();
  }
  const resultListing = searchParams?.get('result');
  const term: string = searchParams?.get('term') || '';

  const sendToSearch = () => {
    if(!searchInputFocus)
      window.location.href = "?search=true"
  }

  const sendToResult = (term: string) => {
    if(searchInputFocus)
      window.location.href = "?result=true&term="+term
  }

  const goBack = () => {
    window.history.back();
  }

  return (
    <>
    <SideNav/>
    <div id="video-post-container" className="p-5">
      <input type="text" placeholder='Type to Search'
      id='type-search'
      className='w-full rounded-lg border border-gray-600'
      onMouseDown={sendToSearch}
      value={term}
      onKeyDown={(e)=>{
        if(e.key === 'Enter'){
          sendToResult(e.target.value);
        }
      }}
      />
      {
        searchInputFocus && <TrendingCarousel />
      }
      {
        resultListing && <SearchProfile/>
      }
      {
        (!searchInputFocus || resultListing) && <SearchPosts/>
      }
    </div>
    </>
  );
}

export default MyComponent;