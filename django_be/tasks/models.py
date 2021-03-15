from django.db import models

# from pygments.lexers import get_lexer_by_name
# from pygments.formatters.html import HtmlFormatter
# from pygments import highlight

class Task(models.Model):
    reminder_text = models.CharField(max_length=255)
    day = models.CharField(max_length=255, blank=True)
    reminder = models.BooleanField(default=False)

    # owner = models.ForeignKey('auth.User', related_name='tasks', on_delete=models.CASCADE, null=True)
    # highlighted = models.TextField(default="Default")

    # def save(self, *args, **kwargs):
    #     reminder_text = self.reminder_text
    #     day = self.day
    #     reminder = self.reminder

    #     # self.highlighted = highlight(reminder_text, day, reminder)
    #     super(Task, self).save(*args, **kwargs)