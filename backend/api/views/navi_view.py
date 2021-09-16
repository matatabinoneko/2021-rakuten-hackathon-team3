import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import io
import os
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

NAVI_URL = "https://event.rakuten.co.jp/gift/"


class NaviAPI(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        res = requests.get(NAVI_URL)
        soup = BeautifulSoup(res.text, "html.parser")

        # 季節のイベント
        seasonals = []
        cnt = 1
        while True:
            s = soup.select("#seasonal > div > div:nth-child(" + str(cnt) + ") > a")
            cnt += 1
            if len(s) < 1:
                break
            eventlink = s[0].get("href")
            title = s[0].select("div.seasonalEventTxt > p.seasonalEventName")[0].text
            description = s[0].select("div.seasonalEventTxt > p.seasonalEventDesc")[0].text
            img_url = s[0].select("div._seasonalEventImg > img")[0].get("src")
            img = requests.get(img_url).content
            # with open("image/" + str(cnt)+".png", "wb") as f:
            #     f.write(img)
            seasonals.append((title, description, img_url, eventlink))

        return Response(seasonals)

