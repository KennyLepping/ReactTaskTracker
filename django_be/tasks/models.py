from django.db import models

# from pygments.lexers import get_lexer_by_name
# from pygments.formatters.html import HtmlFormatter
# from pygments import highlight

class Task(models.Model):
    reminder_text = models.CharField(max_length=255)
    day = models.CharField(max_length=255, blank=True)
    reminder = models.BooleanField(default=False)