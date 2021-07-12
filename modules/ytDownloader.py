# download youtube videos
from pytube import YouTube



def ytDownloader(url, name=None, path='.\\downloads'):
    YouTube(url).streams.first().download(path, name)
    message = f'Your video is successfully downloaded to { path }'

    print(message)
    return message


myUrl = 'https://youtu.be/e1ZOlWhj6mU'
ytDownloader(myUrl, 'Haikyuu OP')