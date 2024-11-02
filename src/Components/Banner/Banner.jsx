import React from 'react';
import Image1 from '../../assets/Images/books.jpg'
const Banner = () => {
    return (
        <div>
            <div class="hero bg-base-200 min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src={Image1}
                    class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;