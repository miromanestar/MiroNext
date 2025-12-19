const getVideos = async (req, res) => {
  const ids = req.query.id;
  const result = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${process.env.YT_KEY}&id=${ids}&part=snippet,contentDetails,statistics,recordingDetails,liveStreamingDetails&maxResults=50`,
  );

  res.status(200).json(await result.json());
};

export default getVideos;
