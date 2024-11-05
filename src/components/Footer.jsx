import { assets } from "../assets/assets";

const Footer = () => {
  return <div className="md:mx-10">
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div className="">
        <img className="mb-5 w-40" src={assets.logo} alt="" />
        <p className="w-full md:w-2/3 text-gray-600  leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div>
        <h3 className="font-medium text-xl mb-5 text-gray-400">Company</h3>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li><a href="">Home</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-xl mb-5 text-gray-400">GET IN TOUCH</h3>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li><a href="">+1-212-456-7890</a></li>
          <li><a href="">ibrhmhmdy@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div className="border-2 border-dashed w-full text-center py-3 border-x-0 border-b-0">
      <p>Copyright © 2024 <a href="https://ibrahimhamdy.net/">IbrahimHamdy</a> - All Right Reserved.</p>
    </div>
  </div>;
};

export default Footer;
