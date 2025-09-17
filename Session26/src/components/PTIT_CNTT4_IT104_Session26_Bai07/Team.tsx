import React from 'react'
import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return <h3>Chi tiết của Team {teamId}</h3>;
}