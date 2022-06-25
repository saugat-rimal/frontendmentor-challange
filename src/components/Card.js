import mobileImage from "../assets/images/image-product-mobile.jpg";
import desktopImage from "../assets/images/image-product-desktop.jpg";
import cart from "../assets/images/icon-cart.svg";

export default function Card() {
  return (
    <div className=" flex h-screen">
      <section className=" flex items-center justify-center container mx-auto ">
        <div className="flex flex-col md:flex-row max-w-sm md:max-w-2xl md:w-auto bg-white rounded-xl drop-shadow-lg mx-4">
          <img
            src={mobileImage}
            alt=""
            className="block md:hidden rounded-t-xl"
          />
          <img
            src={desktopImage}
            alt=""
            className="hidden max-w-xs md:block rounded-l-xl"
          />
          <div className="p-8 md:pt-9">
            <h3 className="tracking-[6px] montserrat500 text-[#52AD8C]">
              PERFUME
            </h3>
            <h2 className="font-bold fraunces text-4xl max-w-xs py-4 text-[#1C232B] md:max-w-xs">
              Gabrielle Essence Eau De Parfum
            </h2>
            <p className="flex max-w-xs pb-2 pt-2 text-[14px] md:text-sm montserrat500 text-[#6C7289]">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>

            <p className=" flex items-center gap-6 pt-8">
              <span className="fraunces text-3xl text-[#52AD8C]">$149</span>
              <span className=" text-sm font-semibold text-[#52AD8C] line-through">
                $169.99
              </span>
            </p>
            <div className="flex justify-center items-center pt-4 md:pt-8">
              <button className="text-center flex justify-center items-center gap-3 bg-[#52AD8C] hover:bg-[#5dcba2] py-2 text-white font-semibold w-full rounded-md ">
                <img src={cart} alt="" />
                <p> Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
