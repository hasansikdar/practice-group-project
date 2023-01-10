import React from 'react';
import CoverImag from '../../assets/Cover_Image/cow_image.jpg';

const Top_Banner = () => {

    const styles = {
        header: {
            backgroundImage: `url(${CoverImag})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',


            // height: '100%',
            // width: '100%',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',            
        },

        content: {
            height: '100vh',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
    }

    return (
        <div className='relative' style={styles.header}>
            <div  style={styles.content}>
                <div className='absolute top-1/4 left-1/4'>
                    <h1 className='text-5xl mb-3 font-bold text-white'>Let's Finish your <br /> Internal Evil</h1>
                    <p className='w-2/4 text-white'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim Lorem ipsum dolor sit amet, usu cu esse possit referrentur.</p>
                    <button className='py-2 px-3 bg-red-500 rounded-lg text-white mt-3'>Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default Top_Banner;