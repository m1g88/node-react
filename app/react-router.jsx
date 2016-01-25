import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import routes from './routes.jsx'
 
export default function(req, res ,next) {
	//console.log(req);

    match({ routes, location:req.url },(error, redirectLocation, renderProps) => {

    	
    	if (error) {
	      res
	      	.status(500)
	      		.send(error.message)
	    } 
	    else if (redirectLocation) {
	      /*   */
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
	    } 
	    else if (renderProps) {
	      res
	      	.status(200)
		      	.render("index.handlebars", {
	            	landing: renderToString(<RoutingContext {...renderProps}/>)
	        	})
	    } 
	    // else if (req.url === '/'){
	    // 	res
	    //   	.status(200)
		   //    	.render("index.handlebars", {
	    //         	landing: 'hi'
	    //     	})
	    // }
	    else {
	      res
	      	.status(404)
	      		.send('Not found')
	    }

        //res.render("index.handlebars", {
          //  markup: renderToString(<RoutingContext {...renderProps}/>)
        //});
    });
}