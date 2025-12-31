import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
  return (
    <section className="mx-6 md:mx-12 mt-6 rounded-3xl bg-linear-to-r from-indigo-700 to-blue-500 px-8 py-14 md:px-16 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Elevate Your Audio Journey
          </h1>

          <p className="mt-6 max-w-xl text-sm md:text-base text-indigo-100">
            Experience Sound in its Purest Form. Our Vision.
            We Believe Audio Isn’t Just Heard, It’s Felt.
            From Crystal-Clear Beats to Immersive Frequencies,
            Elevate Every Moment.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-gray-100">
              Shop Now
            </button>

            <button className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-indigo-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={assets.heroImg}
            alt="DJ with headphones"
            className="w-[300px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero