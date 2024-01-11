import Subnav from './subnav';
import StickyNavbar from './stickynavbar';
import ImageGallery from './imageGallary';
import ImageGal from './imageGal';

const MidJourneyFeature = () => {
  return (
    <div>
        <>
            {/*  This site was created in Webflow. https://www.webflow.com  */}
            {/*  Last Published: Sat Dec 30 2023 01:48:19 GMT+0000 (Coordinated Universal Time)  */}
            {/* <meta charSet="utf-8" />
            <title>midjourneyfeaturebetter-copy</title>
            <meta content="midjourneyfeaturebetter-copy" property="og:title" />
            <meta content="midjourneyfeaturebetter-copy" property="twitter:title" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="Webflow" name="generator" />
            <link href="css/normalize.css" rel="stylesheet" type="text/css" />
            <link href="css/webflow.css" rel="stylesheet" type="text/css" />
            <link href="css/christophers-radical-site-1dd03a.webflow.css" rel="stylesheet" type="text/css"/>
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous"/>
            <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
            <link href="images/webclip.png" rel="apple-touch-icon" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@^2/dist/tailwind.min.css"/> */}
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto text-center pt-64 pb-12">
        <h1 className="text-8xl mb-8 pb-4">Your Stream</h1>
        <p className="text-2xl pb-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
            risus, consectetur eu sodales elementum, convallis in neque. Phasellus
            a felis ut erat hendrerit accumsan.
        </p>
      </div>
        <Subnav/>
        {/* <ImageGallery/> */}
        <ImageGal/>
      </div>
      <div className="spark-section">
        <div className="bg-[#010101] p-8">
        {/*  ComHeader equivalent  */}
        <div className="com-header">{/*  ComHeader content goes here  */}</div>
        <h1 className="text-white font-roboto text-4xl mb-6">
          Community Showcase
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {/*  Repeat this block for each image  */}
          <div className="relative">
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2" />
              <span className="text-black">Like</span>
            </button>
          </div>
          {/*  ... other image blocks ...  */}
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-white font-roboto bg-[#121212] py-2 px-4 rounded-lg mr-2 flex items-center">
            <i className="fa fa-clock-o mr-2" /> Recent
          </button>
          <button className="text-white font-roboto bg-[#121212] py-2 px-4 rounded-lg flex items-center">
            <i className="fa fa-star mr-2" /> Top
          </button>
        </div>
      </div>
    </div>
</>

    </div>
  );
};

export default MidJourneyFeature;
