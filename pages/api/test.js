const handler = async (req, res) => {
    const result = await fetch('https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyCbRfijtQxjx1NLq2q34j3nMNBCHRJ78Bs&id=PL4BrNFx1j7E6a6IKg8N0IgnkoamHlCHWa&part=snippet')

    res.status(200).json(await result.json())
}

export default handler