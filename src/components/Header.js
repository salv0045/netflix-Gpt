import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Slices/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constant';
import { toggleGptSearchView } from '../utils/Slices/gptSlice';
import { changeLanguage } from '../utils/Slices/configSlice';

const Header = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const showGptSearch= useSelector((store)=> store.gpt.showGptSearch);
  const [dropdownOpen, setDropdownOpen] = useState(false);




  const handleSignOut=()=>{
    signOut(auth)
     .then(() => {})
     .catch((error) => {
      navigate('/error');
    });
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid:uid, 
            email:email, 
            displayName:displayName,
            photoURL:photoURL,
          }));
            navigate("/browse");
          } 
      
      else {
       dispatch(removeUser());
      navigate("/");
      }
    });

    //unsubcribed when component unmount
    return ()=> unsubscribe();

   }, []);

 const handleGptSearchClick=()=>{
  //toggle GPT search
  dispatch(toggleGptSearchView());
 }

const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

  return (
    <div className ="absolute md:px-10 md:py-2 p-4 md:pt-8 z-10 flex items-center justify-between w-full bg-gradient-to-b from-black from-50% ">
       <img 
       className='md:w-60 w-[50vw] max-w-60 mx-auto md:mx-0 cursor-pointer opacity-50'
       src ={LOGO}
       alt="logo"
       />
      {user &&  
      (<div className='flex p-2'>
        
      {showGptSearch && 
      <select className="bg-gray-900 text-white p-2 m-2 md:w-auto w-28 rounded-md outline-none" 
        onChange={handleLanguageChange}>
          
          
          {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

        </select>}
        <button className="bg-purple-800 text-white px-3 sm:px-4 py-1.5 md:w-auto w-28 md:text-lg rounded-md"
        onClick={handleGptSearchClick}
        >
         {showGptSearch ? "Homepage":"GPT Search"}
         </button>
         <div className="relative">
            <img 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='w-12 h-12 cursor-pointer'
              src={USER_AVATAR}
              alt="User Icon" 
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20">
                <a href="#" onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
              </div>
            )}
          </div>
       </div>)}
    </div>
  )

}

export default Header