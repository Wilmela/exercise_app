import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name:  bodyPart
    },
    {
      icon: TargetImage,
      name:  target
    },
    {
      icon: EquipmentImage,
      name:  equipment
    }
  ]

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" width='300px' />
      <Stack xs={{ gap: { lg: "35px", sx: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6" color="#355753">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map((item, i) => (
          <Stack key={i} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fafafa",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                mt:'10px'
              }}
            >
              <img src={item.icon} alt={bodyPart} width="50px" height="50px" />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
