/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React from "react";
import "./ControlIcons.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import {
  FastRewind,
  FastForwardSharp,
  PlayArrowSharp,
  PauseSharp,
  VolumeUp,
  VolumeOff,
  Fullscreen,
} from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";

export default function ControlIcons({
  playandpause,
  playing,
  rewind,
  fastForward,
  muting,
  muted,
  volumeChange,
  volumeSeek,
  volume,
  playRate,
  playerbackRate,
  fullScreenMode,
  onSeek,
  played,
  onSeekMouseUp,
  onSeekMouseDown,
  fullMovieTime,
  playedTime,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "playbackrate-popover" : undefined;

  function ValueLabelComponent(props) {
    const { children, value } = props;
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  const PrettoSlider = styled(Slider)({
    height: 5,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 16,
      width: 16,
      backgroundColor: "#52af77",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });
  return (
    <div className="controls__div">
      {/* Top Controls */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="start"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5" style={{ color: "#52af77" }}>
            Player
          </Typography>
        </Grid>
      </Grid>

      {/* Middle Controls */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          className="controls__icons"
          aria-label="reqind"
          onClick={rewind}
        >
          <FastRewind fontSize="large" style={{ color: "#52af77" }} />
        </IconButton>

        <IconButton
          className="controls__icons"
          aria-label="reqind"
          onClick={playandpause}
        >
          {playing ? (
            <PauseSharp fontSize="large" style={{ color: "#52af77" }} />
          ) : (
            <PlayArrowSharp fontSize="large" style={{ color: "#52af77" }} />
          )}
        </IconButton>

        <IconButton
          className="controls__icons"
          aria-label="reqind"
          onClick={fastForward}
        >
          <FastForwardSharp fontSize="large" style={{ color: "#52af77" }} />
        </IconButton>
      </Grid>

      {/* Bottom Controls */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5" style={{ color: "#52af77" }}>
            Urban
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeek}
            onMouseDown={onSeekMouseDown}
            onChangeCommitted={onSeekMouseUp}
            valueLabelDisplay="auto"
            // aria-label="custom thumb label"
            components={{
              ValueLabel: ValueLabelComponent,
            }}
          />
          <Grid container direction="row" justifyContent="space-between">
            <Typography variant="h7" style={{ color: "#52af77" }}>
              {playedTime}
            </Typography>
            <Typography variant="h7" style={{ color: "#52af77" }}>
              {fullMovieTime}
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container alignItems="center" direction="row">
            <IconButton
              className="controls__icons"
              aria-label="reqind"
              onClick={playandpause}
            >
              {playing ? (
                <PauseSharp fontSize="large" style={{ color: "#52af77" }} />
              ) : (
                <PlayArrowSharp fontSize="large" style={{ color: "#52af77" }} />
              )}
            </IconButton>

            <IconButton
              className="controls__icons"
              aria-label="reqind"
              onClick={muting}
            >
              {muted ? (
                <VolumeOff fontSize="large" style={{ color: "#52af77" }} />
              ) : (
                <VolumeUp fontSize="large" style={{ color: "#52af77" }} />
              )}
            </IconButton>

            <Typography style={{ color: "#fff", paddingTop: "5px" }}>
              {volume * 100}
            </Typography>
            <Slider
              min={0}
              max={100}
              value={volume * 100}
              onChange={volumeChange}
              onChangeCommitted={volumeSeek}
              className="volume__slider"
            />
          </Grid>
        </Grid>

        <Grid item>
          <Button
            variant="text"
            onClick={handlePopOver}
            className="bottom__icons"
          >
            <Typography>{playerbackRate}X</Typography>
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Grid container direction="column-reverse">
              {[0.5, 1, 1.5, 2].map((rate) => (
                <Button variant="text" onClick={() => playRate(rate)}>
                  <Typography
                    color={rate === playerbackRate ? "secondary" : "default"}
                  >
                    {rate}
                  </Typography>
                </Button>
              ))}
            </Grid>
          </Popover>

          <IconButton className="bottom__icons" onClick={fullScreenMode}>
            <Fullscreen fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
