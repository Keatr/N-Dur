INSTALLED_APPS = [
    # ...
    'rest_framework',
    'corsheaders',
    'django.contrib.admin',  # for admin interface
    'api',                   # your app with models
    # ...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # must be above CommonMiddleware
    # ...
    'django.middleware.locale.LocaleMiddleware',  # for i18n
    # ...
]

# Allow Next.js dev (localhost:3000) to access APIs
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
