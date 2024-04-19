import React from "react";
import { FaQrcode } from "react-icons/fa6";

const FAQ = () => {
  return (
    <div className=" py-14 pl-2 lg:pl-2 pr-2 bg-gray-200" id="faq">
      <h2 className="text-3xl text-black font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ">
        <div className="shadow-lg bg-white py-2">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaQrcode />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                When is the projected completion date for this development?
              </h3>
              <p className="text-sm">
                Select Six Senses Residences Dubai Marina is slated for
                completion by 2027. If you seek earlier availability, feel free
                to submit an inquiry, and we'll gladly present alternative
                options.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-white py-2">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaQrcode />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">
                Which payment methods do you accept?
              </h3>
              <p className="text-sm">
                Our preferred methods of payment include bank transfers or
                cheques.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-white py-2">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaQrcode />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">
                What is the initial deposit amount required?
              </h3>
              <p className="text-sm">
                To secure your unit, a 20% initial deposit is necessary.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-white py-2">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaQrcode />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">
                Am I allowed to resell my unit before the project's completion?
              </h3>
              <p className="text-sm">
                Absolutely. Once you've signed the sales and purchase agreement
                and fulfilled the 20% deposit requirement, you may proceed with
                the sale of your property.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-white py-2">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaQrcode />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">
                Do I need to be physically present in the UAE to finalize the
                purchase?
              </h3>
              <p className="text-sm">
                No, all documentation and financial transactions can be
                conducted remotely. We can arrange a video call with one of our
                representatives to provide you with a comprehensive overview of
                the project from anywhere in the world.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-white py-2">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <FaQrcode />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">
                What happens if I miss a payment?
              </h3>
              <p className="text-sm">
                While your property remains secure, timely payments are crucial.
                If you miss a payment, we can collaborate on establishing a
                feasible payment schedule that suits your circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
