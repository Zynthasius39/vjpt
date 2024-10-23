# REST_API for [VJPT](../README.md) in Flask

## Create a virtual python environment
```$ python3 -m venv .venv```

## Activate virtual environment

```$ source .venv/bin/activate``` Linux / MacOS

```$ .venv\bin\Activate.ps1``` Windows (PowerShell)

```$ .venv\bin\activate.bat``` Windows (CMD)

## Install requirements.txt

```$ pip3 install -r requirements.txt```

## Start the API

```$ source .venv/bin/active```

- Use Step [Activate VENV](#activate-virtual-environment) for your OS !

```$ uwsgi --http 0.0.0.0:8000 --master -p 4 -w main:app```

##