// import * as cloudinary from 'cloudinary-core';
// const cl = cloudinary.Cloudinary.new();
// cl.config('cloud_name', 'tamas-demo');
// export default cl;
import Vue from 'vue'
import Cloudinary from 'cloudinary-vue';
Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'tamas-demo'
  }
});