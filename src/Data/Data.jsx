/* Footer data
    *href - links  
    *innerText - link names
    *className - class name of link
*/

/*********************************************************** Footer ************************************************************/
export var footer = [
        
        {
            href:"#",
            innerText:"Features",
            ClassName:"nav-link px-2 text-muted"
        },
        
        {
            href:"#",
            innerText:"About",
            ClassName:"nav-link px-2 text-muted"
        },
        
        {
            href:"#",
            innerText:"FAQs",
            ClassName:"nav-link px-2 text-muted"
        },

    ];

/*********************************************************** Login ************************************************************/

export const credentials = {
    username: "Admin123",
    password: "admin123",
}

/*********************************************************** Misc ************************************************************/
export  const homepageImageSrc = [
        { src: "https://cdn.iconscout.com/icon/premium/png-128-thumb/estate-75572.png", alt: "Source"},
        { src: "https://cdn.iconscout.com/icon/premium/png-128-thumb/apartment-6-75568.png", alt: "destination"}
    ];



/*********************************************************** Navbar ************************************************************/
export const links = 
    {

        default:[
            {
                innerText:"Home",
                key:"home",
                to:"/",
                styles:"block w-full py-3 transition hover:text-slate-700 ",
                type:"link",
            },
            {
                innerText:"Services",
                key:"services",
                to:"/",
                styles:"block w-full py-3 transition hover:text-slate-700",
                type:"link",
            },
            {
                innerText:"About",
                key:"about",
                to:"/",
                styles:"block w-full py-3 transition hover:text-slate-700",
                type:"link",
            },
            {
                innerText:"Blog",
                key:"blog",
                to:"/",
                styles:"block w-full py-3 transition hover:text-slate-700",
                type:"link",
            },
            {
                innerText:"Login",
                key:"login",
                to:"/login",
                styles:"block w-full py-3 px-6 rounded-3xl bg-indigo-700 transition hover:bg-cyan-800 focus:bg-cyan-500 active:bg-cyan-800block w-full py-3 transition hover:text-slate-700",
                span_style:"block text-center text-white hover:text-black font-semibold lg:text-base ",
                type:"button",
            }
        ],
        profile:[
            {
                innerText:"Book cab",
                key:"Book",
                to:"/",
                styles:"block w-full py-3 transition hover:text-slate-700",
                type:"link",
            },
            
            {
                innerText:"Blog",
                key:"blog",
                to:"/",
                styles:"block w-full py-3 transition hover:text-slate-700",
                type:"link",
            },

        ]

    };

export const profileLinks = [
        {
            innerText:"Your Profile",
                id:"user-menu-item-0",
                tabIndex: "-1",
                role:"menuitem",
                key:"Profile",
                to:"/",
                styles:"block px-4 py-2 text-sm text-gray-700",
                type:"link",
                
        },
        {
            innerText:"Settings",
                id:"user-menu-item-1",
                tabIndex: "-1",
                role:"menuitem",
                key:"Settings",
                to:"/",
                styles:"block px-4 py-2 text-sm text-gray-700",
                type:"link",
                
        },
        {
            innerText:"Sign out",
                id:"user-menu-item-2",
                tabIndex: "-1",
                role:"menuitem",
                key:"Signout",
                to:"/login",
                styles:"block px-4 py-2 text-sm text-gray-700",
                type:"button",
                
        }
];