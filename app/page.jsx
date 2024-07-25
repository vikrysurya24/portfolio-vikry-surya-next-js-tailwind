import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>{" "}
            <h1 className="h1 mb-6">
              Hello I'm,
              <br />{" "}
              <span>
                Vikry <span className="text-purple-500">Surya</span> Pangestu
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-[16px] text-justify">
              I have 3 years of experience in developing web and mobile
              applications using frameworks like PHP, CodeIgniter, Laravel,
              Flutter, and PostgreSQL. I am skilled in building functional and
              efficient applications.
            </p>
            <div className="flex felx-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex item gap-2 hover:bg-purple-500 hover:text-primary hover:transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-purple-500 rounded-full flex justify-center items-center text-purple-500 text-base hover:bg-purple-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
