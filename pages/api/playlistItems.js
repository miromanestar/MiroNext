const getPlaylistItems = async (req, res) => {

    const playlistId = req.query.playlistId
    const pageToken = req.query.pageToken || ''
    const result = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YT_KEY}&playlistId=${playlistId}&pageToken=${pageToken}&part=snippet&maxResults=50`)

    res.status(200).json(await result.json())
}

export default getPlaylistItems