const home = {
    data: function() {
        return {
            title: 'Home page'
        }
    },
    template: '<div class="content">{{ title }}</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const page2 = {
    data: function () {
        return {
            title: 'Página 2'
        }
    },
    template: '<div class="content">Segunda página</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const page3 = {
    data: function () {
        return {
            title: 'Página terceira'
        }
    },
    template: '<div class="content">Terceira página</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const errorNotFound = {
    data: function () {
        return {
            title: 'Not Found'
        }
    },
    template: '<div class="content not-found">Erro 404</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const routes = [
    { path: '/', component: home },
    { path: '/page2', component: page2 },
    { path: '/page3', component: page3 },
    { path: '/*', component: errorNotFound },
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    template: `
    <div>
        <h2>{{ title }}</h2>
        <nav>
            <ul>
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/page2">página 2</router-link></li>
                <li><router-link to="/page3">página 3</router-link></li>
                <li><router-link to="/page4">página 4</router-link></li>
            </ul>
        </nav>
        <main class="transition">
            <transition
                enter-active-class="animated flash"
                leave-active-class="animated bounce">
                <router-view></router-view>
            </transition>
        </main>
    </div>
    `,
    data: function() {
        return {
            title: '...'
        }
    },
    router
});
