import React from 'react';
import Navbar from '@/components/Navbars';
import Feedback from '@/components/Feedback';
import Logobar from '@/components/Logobar';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
        <Logobar/>
        <Navbar />
        <Feedback/>
        <Footer />
    </div>
  )
}

export default page
