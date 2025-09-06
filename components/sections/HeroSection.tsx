import Image from "next/image";
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';
import { MdInventory2, MdOutlineEmail, MdArrowForward } from 'react-icons/md';
import { IoReceiptOutline } from 'react-icons/io5';

// Keep vector images as they are dotted connection lines
const imgVector1 =
  "http://localhost:3845/assets/20492fabd137ec2a2d7583e50937bde298cc5abc.svg";
const imgVector2 =
  "http://localhost:3845/assets/52cec1ddb0eb79a649fcfbe45cd29dff9a9a3012.svg";
const imgVector3 =
  "http://localhost:3845/assets/0e60c9c24e98a40725fd8dfaada5817f9e85219c.svg";
const imgVector4 =
  "http://localhost:3845/assets/735528003ce29fb89129f2c536b8a9e2df8a7389.svg";
const imgVector5 =
  "http://localhost:3845/assets/678b2595ec0c59714e8b152d96ffee9591f67d3d.svg";
const imgVector6 =
  "http://localhost:3845/assets/c32b855a605480cf412c4960425cf2eecaf8c327.svg";
const imgVector7 =
  "http://localhost:3845/assets/437ea0d5e00913f9d0355b4b5d4a8dc1ede44624.svg";
const imgVector8 =
  "http://localhost:3845/assets/c882acadef8b30ba0a846c665fc187c97a93fee7.svg";
const imgVector9 =
  "http://localhost:3845/assets/7a73f205cefbb05bd2fd5acf14aedc1f10ee17d6.svg";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen shrink-0 flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div
        className="relative size-full w-full flex items-center justify-center"
        data-node-id="11:438"
      >
        <div
          className="absolute content-stretch flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-start left-4 sm:left-8 md:left-16 lg:left-[223px] top-5 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-8rem)] lg:w-[674px]"
          data-node-id="11:239"
        >
          <div
            className="content-stretch flex flex-col gap-0.5 items-center justify-start relative shrink-0 w-full"
            data-node-id="11:233"
          >
            <div
              className="text-center text-[#3639af] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight relative shrink-0"
              data-node-id="11:231"
            >
              Cleomitra
            </div>
            <div
              className="text-center text-[#636264] text-base sm:text-lg leading-relaxed relative shrink-0"
              data-node-id="11:232"
            >
              Beauty made easy with the best smart salon, CRM & inventory
              system.
            </div>
          </div>
          <div
            className="content-stretch flex flex-row flex-wrap gap-2 sm:gap-3 lg:gap-4 items-start justify-center relative shrink-0 w-full"
            data-node-id="11:234"
          >
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:235"
            >
              <div
                className="bg-[#c9f5d2] relative rounded-lg shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:236"
              />
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:237"
              >
                Contact 360
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:240"
            >
              <div
                className="bg-[#d9dcfe] relative rounded-lg shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:241"
              />
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:242"
              >
                Instant Analytics
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:244"
            >
              <div
                className="bg-[#eedbbf] relative rounded-lg shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:245"
              />
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:246"
              >
                Staff & Product Database
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:248"
            >
              <div
                className="bg-[#ffd9dd] relative rounded-lg shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:249"
              />
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:250"
              >
                Auto Inventory
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:252"
            >
              <div
                className="relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:253"
              >
                <div
                  className="absolute bg-[#d9dcfe] rounded-lg size-full"
                  data-node-id="11:254"
                />
                <div
                  className="absolute left-3 sm:left-4 lg:left-[18px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] top-3 sm:top-4 lg:top-[19px] flex items-center justify-center"
                  data-name="ic:baseline-whatsapp"
                  data-node-id="11:255"
                >
                  <RiWhatsappFill className="w-full h-full text-blue-600" />
                </div>
              </div>
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:256"
              >
                Smart Communication
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:257"
            >
              <div
                className="relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:258"
              >
                <div
                  className="absolute bg-[#eedbbf] rounded-lg size-full"
                  data-node-id="11:259"
                />
                <div
                  className="absolute left-3 sm:left-4 lg:left-[18px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] top-3 sm:top-4 lg:top-[19px] flex items-center justify-center"
                  data-name="mdi:instagram"
                  data-node-id="11:260"
                >
                  <RiInstagramFill className="w-full h-full text-orange-600" />
                </div>
              </div>
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:261"
              >
                Social Media Integration
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:264"
            >
              <div
                className="relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:265"
              >
                <div
                  className="absolute bg-[#c9f5d2] rounded-lg size-full"
                  data-node-id="11:266"
                />
                <div
                  className="absolute left-3 sm:left-4 lg:left-[18px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] top-3 sm:top-4 lg:top-[19px] flex items-center justify-center"
                  data-name="ic:outline-inventory-2"
                  data-node-id="11:267"
                >
                  <MdInventory2 className="w-full h-full text-green-600" />
                </div>
              </div>
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:268"
              >
                Track Sales & Progress
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0"
              data-node-id="11:269"
            >
              <div
                className="relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                data-node-id="11:270"
              >
                <div
                  className="absolute bg-[#ffd9dd] rounded-lg size-full"
                  data-node-id="11:271"
                />
                <div
                  className="absolute left-3 sm:left-4 lg:left-[18px] w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] top-3 sm:top-4 lg:top-[19px] flex items-center justify-center"
                  data-name="material-symbols:mail-outline-rounded"
                  data-node-id="11:272"
                >
                  <MdOutlineEmail className="w-full h-full text-pink-600" />
                </div>
              </div>
              <div
                className="text-center text-[#1a1a1a] text-xs sm:text-sm font-medium leading-tight relative shrink-0"
                data-node-id="11:273"
              >
                Email Marketing
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
          data-node-id="11:274"
        >
          <div
            className="absolute bg-[#292cd2] left-1 sm:left-2 rounded-[12px] w-10 h-10 sm:w-12 sm:h-12 lg:w-[62px] lg:h-[62px] top-1 sm:top-2"
            data-node-id="11:263"
          />
          <div
            className="absolute left-3 sm:left-4 lg:left-[18px] w-6 h-6 sm:w-8 sm:h-8 lg:w-[42px] lg:h-[42px] top-3 sm:top-4 lg:top-[18px] flex items-center justify-center"
            data-name="uil:bill"
            data-node-id="11:435"
          >
            <IoReceiptOutline className="w-full h-full text-white" />
          </div>
        </div>
        
        {/* Arrows - responsive positioning */}
        <div className="hidden lg:block">
          <div
            className="absolute left-[870px] size-6 top-[100px]"
            data-name="arrow_right"
            data-node-id="11:306"
          >
            <MdArrowForward className="w-full h-full text-gray-400" />
          </div>
          <div
            className="absolute left-[731px] size-6 top-[232px]"
            data-name="arrow_right"
            data-node-id="11:309"
          >
            <MdArrowForward className="w-full h-full text-gray-400" />
          </div>
          <div className="absolute flex items-center justify-center left-[366px] size-6 top-[232px]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div
                className="relative size-6"
                data-name="arrow_right"
                data-node-id="11:312"
              >
                <MdArrowForward className="w-full h-full text-gray-400" />
              </div>
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[221px] size-6 top-[94px]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div
                className="relative size-6"
                data-name="arrow_right"
                data-node-id="11:315"
              >
                <MdArrowForward className="w-full h-full text-gray-400" />
              </div>
            </div>
          </div>
          <div
            className="absolute left-[159px] size-6 top-[27px]"
            data-name="arrow_right"
            data-node-id="11:318"
          >
            <MdArrowForward className="w-full h-full text-gray-400" />
          </div>
          <div
            className="absolute left-[898px] size-6 top-[292px]"
            data-name="arrow_right"
            data-node-id="11:343"
          >
            <MdArrowForward className="w-full h-full text-gray-400" />
          </div>
          <div
            className="absolute left-[78px] size-6 top-[175px]"
            data-name="arrow_right"
            data-node-id="11:324"
          >
            <MdArrowForward className="w-full h-full text-gray-400" />
          </div>
        </div>

        {/* Background Vector Lines - Keep original dotted connection lines */}
        <div className="hidden xl:block absolute inset-0 pointer-events-none opacity-30">
          <div
            className="absolute h-[203px] left-[913px] top-[101px] w-[88px]"
            data-node-id="11:352"
          >
            <div className="absolute inset-[-0.25%_-0.57%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector1}
                width={88}
                height={203}
              />
            </div>
          </div>
          <div
            className="absolute h-[41px] left-[746px] top-[211px] w-[111px]"
            data-node-id="11:406"
          >
            <div className="absolute inset-[-1.22%_-0.45%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector2}
                width={111}
                height={41}
              />
            </div>
          </div>
          <div
            className="absolute h-[65px] left-[885px] top-[47px] w-[63px]"
            data-node-id="11:407"
          >
            <div className="absolute inset-[-0.77%_-0.79%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector3}
                width={63}
                height={65}
              />
            </div>
          </div>
          <div
            className="absolute h-[98.5px] left-[828px] top-28 w-[74px]"
            data-node-id="11:408"
          >
            <div className="absolute inset-[-0.51%_-0.68%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector4}
                width={74}
                height={98}
              />
            </div>
          </div>
          <div
            className="absolute h-[67px] left-[174px] top-[39px] w-[57px]"
            data-node-id="11:409"
          >
            <div className="absolute inset-[-0.75%_-0.88%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector5}
                width={57}
                height={67}
              />
            </div>
          </div>
          <div
            className="absolute h-[95px] left-[39px] top-[39px] w-[27px]"
            data-node-id="11:410"
          >
            <div className="absolute inset-[-0.53%_-1.85%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector6}
                width={27}
                height={95}
              />
            </div>
          </div>
          <div
            className="absolute h-[65px] left-[39px] top-[241px] w-[170px]"
            data-node-id="11:411"
          >
            <div className="absolute inset-[-0.77%_-0.29%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector7}
                width={170}
                height={65}
              />
            </div>
          </div>
          <div
            className="absolute h-[65px] left-[93px] top-[187px] w-[168px]"
            data-node-id="11:412"
          >
            <div className="absolute inset-[-0.77%_-0.3%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
                width={168}
                height={65}
              />
            </div>
          </div>
          <div
            className="absolute h-8 left-[261px] top-[212px] w-[115px]"
            data-node-id="11:413"
          >
            <div className="absolute inset-[-1.56%_-0.43%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src={imgVector9}
                width={115}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}