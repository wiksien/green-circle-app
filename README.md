# green-circle-app

HTMX project for Anglehack

Swapping inner html content:

<a
          class="card"
          hx-get="/swap.html"
          hx-swap="innerHTML"
          hx-trigger="click"
        >
<img class="thumbnail" src="img/thumbnail.png" />
</a>

Changing pages:

<a class="segment" href="/test.html">
