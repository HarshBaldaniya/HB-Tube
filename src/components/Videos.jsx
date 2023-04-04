import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

import { usePagination, Pagination } from "pagination-react-js";

const Videos = ({ videos, direction }) => {
  const { currentPage, entriesPerPage, entries } = usePagination(1, 8);

  if (!videos?.length) return "Loading...";
  // console.log(videos)

  return (
    <>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {videos &&
          videos
            .slice(entries.indexOfFirst, entries.indexOfLast)
            .map((item, idx) => (
              <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
            ))}
      </Stack>
      <Pagination
        entriesPerPage={entriesPerPage.get}
        totalEntries={videos.length}
        currentPage={{ get: currentPage.get, set: currentPage.set }}
        offset={3}
        classNames={{
          wrapper: "pagination m-auto",
          item: "pagination-item",
          itemActive: "pagination-item-active",
          navPrev: "pagination-item nav-item",
          navNext: "pagination-item nav-item",
          navStart: "pagination-item nav-item",
          navEnd: "pagination-item nav-item",
          navPrevCustom: "pagination-item",
          navNextCustom: "pagination-item",
        }}
        showFirstNumberAlways={true}
        showLastNumberAlways={true}
        navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        navPrevCustom={{
          steps: 5,
          content:
            "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
        navNextCustom={{
          steps: 5,
          content:
            "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
        }}
      />
    </>
  );
};

export default Videos;
