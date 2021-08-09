from app import app

from flask import render_template, request, url_for

import markdown2
from pathlib import Path


socials = {
    'twitter': 'https://twitter.com/geraldokolo_dc',
    'github': 'https://github.com/gerald-x',
    'instagram': 'https://instagram.com/k.a.i.t.o_x'
}

@app.route("/")
@app.route("/home")
def index():
    profile = Path(__file__).with_name("profile.md")
    with open(profile, "r") as file:
        text = file.read()
        profile_data = markdown2.markdown(text)
    return render_template("index.html", profile=profile_data, socials=socials)


@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "GET":
        return render_template("contact.html", socials=socials)
    else:
        first_name = request.form.get("first_name").lower()
        last_name = request.form.get("last_name").lower()
        email = request.form.get("email")
        subject = request.form.get("subject")
        body = request.form.get("body")

        return render_template("contact.html", body=body, subject=subject, email=email, last_name=last_name.capitalize(), first_name=first_name.capitalize(), button="submitBtn", socials=socials)
