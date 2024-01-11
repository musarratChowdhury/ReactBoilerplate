import { Calendar } from "@/components/ui/calendar";
import Wrapper from "@/components/wrapper";
import React from "react";

const Home = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Wrapper>
      <h1>Home</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      ></Calendar>
    </Wrapper>
  );
};

export default Home;
