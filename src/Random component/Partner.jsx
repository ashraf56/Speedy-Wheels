import React from 'react';
import Marquee from 'react-fast-marquee';

let alldata= [
    {id:1, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png'},
    {id:2, img:'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0MzA5MDU5NjkwNzY4MjUy/1968-hot-wheels-car-list.png'},
    {id:3, img:'https://images.squarespace-cdn.com/content/v1/5bbd35792727be3d5c4e940a/1539802093305-6GFBQ7YBTJWG31UNYWTN/MGA+Entertainment.png'},
    {id:4, img:'https://cdn.vox-cdn.com/thumbor/CnbLWt18r48IMaHNem2ml-ghkes=/150x0:1770x1080/1400x1400/filters:focal(150x0:1770x1080):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/28136181/bandai-namco-logo_1920.0.jpg'},
    {id:5, img:'https://i.ebayimg.com/images/g/TLMAAOSwJPZhaK3o/s-l1600.jpg'},
    {id:6, img:'https://1000logos.net/wp-content/uploads/2020/09/Hasbro-logo.jpg'}
]
    

const Partner = () => {
    return (
        <div className='my-5'>
            <h3 className='text-center text-uppercase fw-bold'>Our Partner
                <hr className='w-50 mx-auto' />
            </h3>


            <div className='   text-center'>

               
                    <div className="d-flex gap-4 py-3 my-5 ">
 <Marquee>
                {
                    alldata.map(d=>(
                        <div className=" px-5" key={d.id}>

                            <img src={d.img} style={{ width: '100px', paddingTop: '20px' }} />
                        </div>
                       
                    ))
                }
                        

 </Marquee>

                    </div>

               


            </div>

        </div>
    );
};

export default Partner;