import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import InfoApp from '../../components/info-app/InfoApp';
import ComentsList from '../../components/coments-list/ComentsList';
import ComentForm from '../../components/coment-form/ComentForm'

export default function SingleApp() {
    return (
        <>
            <Navbar />
            <InfoApp />
            {/* <ComentsList />
            <ComentForm /> */}
            <Footer />
        </>
    )
}