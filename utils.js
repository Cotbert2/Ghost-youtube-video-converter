import ytdl from 'youtube-dl-exec';

const getFileName = (url) => {
    return `./audio/${url.substring(32)}.mp3`;
}

export const downloadFileByYoutubeURL = async (url, format) => {
    const fileName =  getFileName(url);
    let videoTitle = '';
    await ytdl(url, {
        output: fileName,
        extractAudio: true,
        audioFormat: format,
    }).then(output => {
        console.log(output);
        console.timeEnd('download');
    }).catch(err => {
        console.error(err);
    });

    await ytdl(url, {
        dumpJson: true
    }).then(output => {
        videoTitle = output.title;
    }).catch(err => {
        console.error(err);
    });

    console.log(`Video title: ${videoTitle}`);

    return {
        fileName,
        videoTitle
    };
}

