"use client";
import { useEffect } from "react";
import { FooterSection } from "../components/footer";
import HeaderSection from "../components/header";

const GymRulesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderSection />
      <div className='min-h-screen bg-white py-8 px-4 md:px-16 font-body'>
        {/* Header */}
        <header className='text-center mb-8'>
          <div className='md:flex md:justify-center '>
            <h1 className='whitespace-normal text-4xl font-bold text-black md:w-[80%] p-2 rounded-md mb-2'>
              Gym Rules
            </h1>
          </div>

          <p className=' text-sm md:text-lg max-w-4xl mx-auto'>
            At Wizz Gym , we prioritize a safe, clean, and respectful
            environment for all members. To ensure that everyone enjoys a
            positive and productive experience, all members are required to
            follow the gym's rules and regulations. Failure to adhere to these
            guidelines may result in membership termination and a ban from the
            gym.
          </p>
        </header>

        {/* Rules List */}
        <section className='max-w-4xl mx-auto bg-red-500 shadow-lg rounded-lg p-8'>
          <h2 className=' px-2 text-lg md:text-2xl font-semibold whitespace-nowrap text-black  md:w-[30%] p-2 rounded-md mb-4'>
            General Gym Rules:
          </h2>
          <div className='list-disc list-inside space-y-4'>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>Membership Requirement:</span>
                <br />
                All individuals must have an active membership to access the
                gym. Memberships are non-transferable and are only valid for the
                member they are issued to.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>Proper Attire:</span>
                <br /> Members must wear appropriate gym clothing and
                closed-toed footwear at all times. No sandals, open-toed shoes,
                or inappropriate attire.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>Personal Hygiene: </span>
                <br />
                Members should maintain proper hygiene and cleanliness,
                including wearing clean gym clothes and using deodorant.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'> Respect for Equipment: </span>
                <br />
                Members should use gym equipment properly and ensure that they
                return weights, dumbbells, and machines to their designated
                places after use. Equipment should not be damaged or misused.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>Cleanliness: </span>
                <br /> Always wipe down equipment after use with available
                cleaning supplies. Members must help keep the gym clean by
                discarding trash and not leaving personal items lying around.
              </p>
            </div>
          </div>
          <h2 className=' px-2 text-lg md:text-2xl font-semibold whitespace-nowrap text-black  md:w-[30%] p-2 rounded-md mb-4'>
            Behavioral Conduct:
          </h2>
          <div className='list-disc list-inside space-y-4'>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>Respectful Behavior: </span>{" "}
                <br />
                Members must behave respectfully toward others, avoiding loud
                conversations, inappropriate language, and disruptive actions.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>No Intimidation: </span> <br />{" "}
                Members should not intimidate or harass others. Bullying,
                aggressive behavior, or offensive language will not be
                tolerated.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>Personal Space: </span> <br />{" "}
                Respect other members' personal space while using equipment or
                exercising. Avoid standing too close or interfering with others'
                workouts.
              </p>
            </div>
          </div>
          <h2 className=' px-2 text-lg md:text-2xl font-semibold whitespace-nowrap text-black  md:w-[30%] p-2 rounded-md mb-4'>
            Health & Safety:
          </h2>
          <div className='list-disc list-inside space-y-4'>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>Medical Conditions: </span>{" "}
                <br />
                Members with any pre-existing medical conditions or injuries
                should consult a physician before using the gym's equipment.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'> Injuries: </span>
                <br /> Any injury, whether minor or major, must be reported to
                gym staff immediately.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'> Emergency Procedures: </span>{" "}
                <br />
                Members should familiarize themselves with emergency exits and
                safety procedures, as posted throughout the gym.
              </p>
            </div>
          </div>
          <h2 className=' px-2 text-lg md:text-2xl font-semibold whitespace-nowrap text-black  md:w-[30%] p-2 rounded-md mb-4'>
            Food & Drink Policy:
          </h2>
          <div className='list-disc list-inside space-y-4'>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>No Food Allowed: </span> <br />{" "}
                Members are not permitted to bring or consume food inside the
                gym. This is to maintain cleanliness and a distraction-free
                environment. Only water and fitness supplements in sealed
                containers are allowed.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'> Water Bottles: </span> <br />{" "}
                Members must bring their own water bottles. Sharing is not
                allowed to avoid cross-contamination.
              </p>
            </div>
          </div>
          <h2 className=' px-2 text-lg md:text-2xl font-semibold whitespace-nowrap text-black  md:w-[30%] p-2 rounded-md mb-4'>
            Violation of Rules:
          </h2>
          <div className='list-disc list-inside space-y-4'>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'> Non-Compliance: </span>
                <br /> Members failing to adhere to any of the gym's rules,
                including the food policy, will face immediate disciplinary
                actions.
              </p>
            </div>
            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>
                  Termination of Membership:{" "}
                </span>
                <br />
                Repeated violations or serious breaches of the rules will result
                in membership termination, and the individual will be banned
                from Wizz Gym .
              </p>
            </div>

            <div className='flex flex-row space-x-2 justify-center mt-2  w-fit '>
              <img
                src='/zz.jpg'
                alt='/wizz gym logo'
                className='w-10 h-10 rounded-full'
              />
              <p className=' text-white'>
                <span className='font-semibold'>
                  Zero Tolerance for Abuse:{" "}
                </span>
                <br />
                Any abuse of staff or equipment will result in an immediate ban
                without warning.
              </p>
            </div>
          </div>
        </section>
        <p className=' text-sm md:lg max-w-4xl mx-auto my-4'>
          By following these rules, members can enjoy a productive and positive
          experience at Wizz Gym . Thank you for your cooperation.
        </p>
      </div>
      <FooterSection />
    </>
  );
};

export default GymRulesPage;
