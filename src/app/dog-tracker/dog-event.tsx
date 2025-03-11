import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./dog-event-card.css";

interface DogEventComponentProps {
  time: number;
  name: string;
}

export const DogEvent: React.FC<DogEventComponentProps> = ({ time, name }) => {
  return (
    <Card className="box">
      <CardHeader>
        <CardTitle>Bea Event</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{name}</p>
        <p>{time}</p>
        <Button>Delete</Button>
      </CardContent>
    </Card>
  );
};
