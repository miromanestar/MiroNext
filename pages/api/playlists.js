const getPlaylists = async (req, res) => {

    const playlistId = req.query.id
    const result = await fetch(`https://www.googleapis.com/youtube/v3/playlists?key=${process.env.YT_KEY}&id=${playlistId}&part=snippet`)

    res.status(200).json(await result.json())
}

export default getPlaylists