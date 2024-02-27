import React from "react";
import BBSCard from "../BBSCard/BBSCard";
import { BBSData } from "@/types/types";
interface BbsAllDataProps {
  BbsAllData: BBSData[];
}

const BBSCardList = ({ BbsAllData }: BbsAllDataProps) => {
  return (
    <div className=" grid lg: grid-cols-3 px-4 py-4 gap-4 ">
      {BbsAllData.map((bbsCard: BBSData) => {
        return <BBSCard key={bbsCard.id} bbsCard={bbsCard} />;
      })}
    </div>
  );
};

export default BBSCardList;
