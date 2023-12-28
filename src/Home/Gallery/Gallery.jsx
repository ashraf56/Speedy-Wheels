import React from 'react';
import PhotoAlbum from "react-photo-album";
import img from '../../assets/green-easter-car-with-eggs-copy-space.jpg'
import './Gallery.css';

const Gallery = () => {

  return (
    <div className='my-5'>
      <h3 className='py-5 fw-bold text-center text-uppercase'>Wheelie Snaps
        <hr className='w-50 mx-auto' />
      </h3>


      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
            className="w-100 shadow-1-strong img-hover rounded mb-4"

          />

          <img
            src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            className="w-100 shadow-1-strong img-hover rounded mb-4"

          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-100 shadow-1-strong img-hover rounded mb-4"
          />

          <img
            src="https://images.unsplash.com/photo-1617808654153-9b20f8728b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1023&q=80"
            className="w-100 shadow-1-strong img-hover rounded mb-4"
          />

          <img
            src="https://images.unsplash.com/photo-1536846511313-4b07b637bff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-100 shadow-1-strong img-hover rounded mb-4"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1595641416278-c4469e0a22d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-100 shadow-1-strong img-hover rounded mb-4"
          />

          <img
            src="https://images.unsplash.com/photo-1600709840379-3ddaebf0c1b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRveSUyMGNhcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            className="w-100 shadow-1-strong img-hover rounded mb-4"
          />

        </div>
      </div>

    </div>
  );
};

export default Gallery;