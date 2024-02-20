import CustomFilter from "../../components/CustomFilter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden text-white">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width"
      id="discover"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">
            Explore Exercises 
          </h1>
          <p>
            Explore the exercise you want to do 
          </p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar/>

          <div
          className="flex justify-start flex-wrap items-center gap-2"
          >
            <CustomFilter title=" Muscle"/>
            <CustomFilter title=" Exercise"/>
            <CustomFilter title=" Type of Training"/>
            <CustomFilter title=" Difficulty"/>
          </div>
        </div>
      </div>
    </main>
  );
}
