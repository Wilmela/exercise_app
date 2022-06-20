import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {fetchData, exerciseOptions, youtubeOptions } from "../../utils/fetchData";

import Detail from "../Detail";
import ExerciseVideos from "../ExerciseVideos";
import SimilarExercises from "../SimilarExercises";

const Exercise = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({})

  const [targetMuscleExercises, setTargetMuscleExercises] = useState({});
  const [equipmentExercises, setEquipmentExercises] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetch(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions );
      const data = await exerciseVideoData.json();
      setExerciseVideos(data.contents);

      const targetMuscleExercisesData = await fetch(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      const targetData = await targetMuscleExercisesData.json();
      setTargetMuscleExercises(targetData)

      const equipmentExercisesData = await fetch(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      const equipData = await equipmentExercisesData.json();
      setEquipmentExercises(equipData);

    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  );
};

export default Exercise;
