function divTitlePage(div_container){
    //img_1
    var img_1 = document.createElement('img');
    img_1.className = "d-block mx-auto mb-4";
    img_1.src = "./images/bootstrap-solid.svg";
    img_1.alt = "";
    img_1.width = "72";
    img_1.height = "72";

    //h2_1
    var text_h2 = document.createTextNode("Checkout form");
    var h2_1 = document.createElement('h2');
    h2_1.appendChild(text_h2);

    //p1
    var text_p1 = document.createTextNode("Below is an examble form built entirely with Bootstra's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.");
    var p1 = document.createElement("p");
    p1.appendChild(text_p1);
    p1.className = "lead";

    //div1
    var div1 = document.createElement('div');
    div1.className = "py-5 text-center";
    div1.appendChild(img_1);
    div1.appendChild(h2_1);
    div1.appendChild(p1);

    div_container.appendChild(div1);
}

function divFooterPage(div_container){

    var footer = document.createElement('footer');
    footer.className = "my-5 pt-5 text-muted text-center text-small"

    //p_footer
    var text_footer = document.createTextNode("© 2017-2019 Company Name");
    var p_footer = document.createElement('p');
    p_footer.appendChild(text_footer);
    p_footer.className  = "mb-1";

    //ul_footer
    var ul_footer = document.createElement('ul');
    ul_footer.className = "list-inline";

    var li_footer_1 = document.createElement('li');
    li_footer_1.className = "list-inline-item";
    var a_footer_1 = document.createElement('a');
    a_footer_1.href = "#";

    var li_footer_2 = document.createElement('li');
    li_footer_2.className = "list-inline-item";
    var a_footer_2 = document.createElement('a');
    a_footer_2.href = "#";

    var li_footer_3 = document.createElement('li');
    li_footer_3.className = "list-inline-item";
    var a_footer_3 = document.createElement('a');
    a_footer_3.href = "#";

    text_footer = document.createTextNode("Privacy");
    a_footer_1.appendChild(text_footer);
    li_footer_1.appendChild(a_footer_1);
    ul_footer.appendChild(li_footer_1);

    text_footer = document.createTextNode("Terms");
    a_footer_2.appendChild(text_footer);
    li_footer_2.appendChild(a_footer_2);
    ul_footer.appendChild(li_footer_2);

    text_footer = document.createTextNode("Support");
    a_footer_3.appendChild(text_footer);
    li_footer_3.appendChild(a_footer_3);
    ul_footer.appendChild(li_footer_3);

    footer.appendChild(p_footer);
    footer.appendChild(ul_footer);

    div_container.appendChild(footer);
}

function divYourCart(div_row){

        //div
        var div_cart = document.createElement('div');
        div_cart.className = "col-md-4 order-md-2 mb-4";

            //h4
            var h4_1 = document.createElement('h4');
            h4_1.className = "d-flex justify-content-between align-items-center mb-3";    
            
                //span
                var span_1 = document.createElement('span');
                span_1.className = "text-muted";
                span_1.textContent = "Your cart";
                
                var span_2 = document.createElement('span');
                span_2.className = "badge badge-secondary badge-pill";
                span_2.textContent = "3";
            
            h4_1.appendChild(span_1);
            h4_1.appendChild(span_2);

            //ul
            var ul_1 = document.createElement('ul');
            ul_1.className = "list-group mb-3";

                //li
                var li_1 = document.createElement('li');
                li_1.className = "list-group-item d-flex justify-content-between lh-condensed";

                    //div
                    var div_li_1 = document.createElement('div');

                        //h6
                        var h6_li_1 = document.createElement('h6');
                        h6_li_1.className = "my-0";
                        h6_li_1.textContent = "Product name";

                        //small
                        var small_li_1 = document.createElement('small');
                        small_li_1.className = "text-muted";
                        small_li_1.textContent = "Brief description";

                    div_li_1.appendChild(h6_li_1);
                    div_li_1.appendChild(small_li_1);

                    //span
                    var span_li_1 = document.createElement('span');
                    span_li_1.className = "text-muted";
                    span_li_1.textContent = "$12";

                li_1.appendChild(div_li_1);
                li_1.appendChild(span_li_1);

                //li
                var li_2 = document.createElement('li');
                li_2.className = "list-group-item d-flex justify-content-between lh-condensed";

                    //div
                    var div_li_2 = document.createElement('div');

                        //h6
                        var h6_li_2 = document.createElement('h6');
                        h6_li_2.className = "my-0";
                        h6_li_2.textContent = "Second product";

                        //small
                        var small_li_2 = document.createElement('small');
                        small_li_2.className = "text-muted";
                        small_li_2.textContent = "Brief description";

                    div_li_2.appendChild(h6_li_2);
                    div_li_2.appendChild(small_li_2);

                    //span
                    var span_li_2 = document.createElement('span');
                    span_li_2.className = "text-muted";
                    span_li_2.textContent = "$8";

                li_2.appendChild(div_li_2);
                li_2.appendChild(span_li_2);

                //li
                var li_3 = document.createElement('li');
                li_3.className = "list-group-item d-flex justify-content-between lh-condensed";

                    //div
                    var div_li_3 = document.createElement('div');

                        //h6
                        var h6_li_3 = document.createElement('h6');
                        h6_li_3.className = "my-0";
                        h6_li_3.textContent = "Third item";

                        //small
                        var small_li_3 = document.createElement('small');
                        small_li_3.className = "text-muted";
                        small_li_3.textContent = "Brief description";

                    div_li_3.appendChild(h6_li_3);
                    div_li_3.appendChild(small_li_3);

                    //span
                    var span_li_3 = document.createElement('span');
                    span_li_3.className = "text-muted";
                    span_li_3.textContent = "$5";

                li_3.appendChild(div_li_3);
                li_3.appendChild(span_li_3);

                //li
                var li_4 = document.createElement('li');
                li_4.className = "list-group-item d-flex justify-content-between bg-light";

                    //div
                    var div_li_4 = document.createElement('div');
                    div_li_4.className = "text-success";

                        //h6
                        var h6_li_4 = document.createElement('h6');
                        h6_li_4.className = "my-0";
                        h6_li_4.textContent = "Promo code";

                        //small
                        var small_li_4 = document.createElement('small');
                        small_li_4.textContent = "EXAMPLECODE";

                    div_li_4.appendChild(h6_li_4);
                    div_li_4.appendChild(small_li_4);

                    //span
                    var span_li_4 = document.createElement('span');
                    span_li_4.className = "text-success";
                    span_li_4.textContent = "-$5";

                li_4.appendChild(div_li_4);
                li_4.appendChild(span_li_4);

                //li
                var li_5 = document.createElement('li');
                li_5.className = "list-group-item d-flex justify-content-between";

                    //span
                    var span_li_5 = document.createElement('span');
                    span_li_5.textContent = "Total (USD)";

                    //strong
                    var strong_li_5 = document.createElement('strong');
                    strong_li_5.textContent = "$20";

                li_5.appendChild(span_li_5);
                li_5.appendChild(strong_li_5);

            ul_1.appendChild(li_1);
            ul_1.appendChild(li_2);
            ul_1.appendChild(li_3);
            ul_1.appendChild(li_4);
            ul_1.appendChild(li_5);

            //form
            var form_1 = document.createElement('form');
            form_1.className = "card p-2";

                //div
                var div_form_1 = document.createElement('div');
                div_form_1.className = "input-group";

                    //input
                    var input_form_1 = document.createElement('input');
                    input_form_1.className = "form-control";
                    input_form_1.type = "text";
                    input_form_1.placeholder = "Promo code";

                    //div
                    var div2_form_1 = document.createElement('div');
                    div2_form_1.className = "input-group-append";

                        //button
                        var button_form_1 = document.createElement('button');
                        button_form_1.className = "btn btn-secondary";
                        button_form_1.type = "submit";
                        button_form_1.textContent = "Redeem";

                    div2_form_1.appendChild(button_form_1);
                div_form_1.appendChild(input_form_1);
                div_form_1.appendChild(div2_form_1);
            
            form_1.appendChild(div_form_1);

        div_cart.appendChild(h4_1);
        div_cart.appendChild(ul_1);
        div_cart.appendChild(form_1);

    div_row.appendChild(div_cart);
}

function divForm(div_row){
    //div
    div_form = document.createElement('div');
    div_form.className = "col-md-8 order-md-1";

        //h4
        div_form_h4 = document.createElement('h4');
        div_form_h4.className = "mb-3";
        div_form_h4.textContent = "Billing address";

        //form
        form_val = document.createElement('form');
        form_val.className = "needs-valdation"
        //document.getElementsByClassName("needs-validation").noValidate = true;
        form_val.noValidate = true;

            //div
            div_1_form_val = document.createElement('div');
            div_1_form_val.className = "row";

                //div
                var div_1_1 = document.createElement('div');
                div_1_1.className = "col-md-6 mb-3";

                    //label
                    var label_div_1_1 = document.createElement('label');
                    label_div_1_1.htmlFor = "firstName";
                    label_div_1_1.textContent = "First name";

                    //input
                    var input_div_1_1 = document.createElement('input');
                    input_div_1_1.className = "form-control";
                    input_div_1_1.type = "text";
                    input_div_1_1.id = "firstName";
                    input_div_1_1.placeholder = "";
                    att = document.createAttribute("value");
                    input_div_1_1.setAttributeNode(att);
                    att = document.createAttribute("required");
                    input_div_1_1.setAttributeNode(att);

                    //div
                    var div_1_1_1 = document.createElement('div');
                    div_1_1_1.className = "invalid-feedback";
                    div_1_1_1.textContent = "Valid first name is required.";

                div_1_1.appendChild(label_div_1_1);
                div_1_1.appendChild(input_div_1_1);
                div_1_1.appendChild(div_1_1_1);

                //div
                var div_1_2 = document.createElement('div');
                div_1_2.className = "col-md-6 mb-3";

                    //label
                    var label_div_1_2 = document.createElement('label');
                    label_div_1_2.htmlFor = "lastName";
                    label_div_1_2.textContent = "Last name";

                    //input
                    var input_div_1_2 = document.createElement('input');
                    input_div_1_2.className = "form-control";
                    input_div_1_2.type = "text";
                    input_div_1_2.id = "lastName";
                    input_div_1_2.placeholder = "";
                    att = document.createAttribute("value");
                    input_div_1_2.setAttributeNode(att);
                    att = document.createAttribute("required");
                    input_div_1_2.setAttributeNode(att);

                    //div
                    var div_1_2_1 = document.createElement('div');
                    div_1_2_1.className = "invalid-feedback";
                    div_1_2_1.textContent = "Valid last name is required.";

                div_1_2.appendChild(label_div_1_2);
                div_1_2.appendChild(input_div_1_2);
                div_1_2.appendChild(div_1_2_1);
            
            div_1_form_val.appendChild(div_1_1);
            div_1_form_val.appendChild(div_1_2);

            //div username
            div_2_form_val = document.createElement('div');
            div_2_form_val.className = "mb-3";

                //label
                var label_2 = document.createElement('label');
                label_2.htmlFor = "username";
                label_2.textContent = "Username";

                //div
                var div_2_1 = document.createElement('div');
                div_2_1.className = "input-group";

                    //div
                    var div_2_1_1 = document.createElement('div');
                    div_2_1_1.className = "input-group-prepend";

                        //span
                        var span_div_2_1_1 = document.createElement('span');
                        span_div_2_1_1.className = "input-group-text";
                        span_div_2_1_1.textContent = "@";
                    
                    div_2_1_1.appendChild(span_div_2_1_1);

                    //input
                    var input_div_2_1 = document.createElement('input');
                    input_div_2_1.className = "form-control";
                    input_div_2_1.type = "text";
                    input_div_2_1.id = "username";
                    input_div_2_1.placeholder = "Username";
                    input_div_2_1.required = true;

                    //div
                    var div_2_1_2 = document.createElement('div');
                    div_2_1_2.className = "invalid-feedback";
                    div_2_1_2.setAttribute("style", "width: 100%");
                    div_2_1_2.textContent = "Your username is required."
                
                div_2_1.appendChild(div_2_1_1);
                div_2_1.appendChild(input_div_2_1);
                div_2_1.appendChild(div_2_1_2);

            div_2_form_val.appendChild(label_2);
            div_2_form_val.appendChild(div_2_1);

            //div Email
            div_3_form_val = document.createElement('div');
            div_3_form_val.className = "mb-3";
                
                //label
                label_3 = document.createElement('label');
                label_3.htmlFor = "email";
                label_3.textContent = "Email";

                    //span
                    span_label_3 = document.createElement('span');
                    span_label_3.className = "text-muted";
                    span_label_3.textContent = "(Optional)";
                
                label_3.appendChild(span_label_3);

                //input
                input_div_3 = document.createElement('input');
                input_div_3.className = "form-control";
                input_div_3.type = "email";
                input_div_3.id = "email";
                input_div_3.placeholder = "you@example.com";

                //div
                div_3_1 = document.createElement('div');
                div_3_1.className = "invalid-feedback";
                div_3_1.textContent = "Please enter a valid email address for shipping updates.";

            div_3_form_val.appendChild(label_3);
            div_3_form_val.appendChild(input_div_3);
            div_3_form_val.appendChild(div_3_1);

            //div Address
            div_4_form_val = document.createElement('div');
            div_4_form_val.className = "mb-3";
                
                //label
                label_4 = document.createElement('label');
                label_4.htmlFor = "address";
                label_4.textContent = "Address";

                //input
                input_div_4 = document.createElement('input');
                input_div_4.className = "form-control";
                input_div_4.type = "text";
                input_div_4.id = "address";
                input_div_4.placeholder = "1234 Main St";
                input_div_4.required = true;

                //div
                div_4_1 = document.createElement('div');
                div_4_1.className = "invalid-feedback";
                div_4_1.textContent = "Please enter your shipping address.";

            div_4_form_val.appendChild(label_4);
            div_4_form_val.appendChild(input_div_4);
            div_4_form_val.appendChild(div_4_1);

            //div Address
            div_5_form_val = document.createElement('div');
            div_5_form_val.className = "mb-3";
                
                //label
                label_5 = document.createElement('label');
                label_5.htmlFor = "address2";
                label_5.textContent = "Address 2";

                    //span
                    span_label_5 = document.createElement('span');
                    span_label_5.className = "text-muted";
                    span_label_5.textContent = "(Optional)";

                label_5.appendChild(span_label_5);

                //input
                input_div_5 = document.createElement('input');
                input_div_5.className = "form-control";
                input_div_5.type = "text";
                input_div_5.id = "address2";
                input_div_5.placeholder = "Apartment or suite";

            div_5_form_val.appendChild(label_5);
            div_5_form_val.appendChild(input_div_5);

            //div
            var div_6_form_val = document.createElement('div');
            div_6_form_val.className = "row";

                //div
                var div_6_1 = document.createElement('div');
                div_6_1.className = "col-md-5 mb-3";

                    //label
                    var label_6_1 = document.createElement('label');
                    label_6_1.htmlFor = "country";
                    label_6_1.textContent = "Country";

                    //select
                    var select_6_1 = document.createElement('select');
                    select_6_1.className = "custom-select d-block w-100";
                    select_6_1.id = "country";
                    select_6_1.required = true;

                        //option
                        var option_6_1_1 = document.createElement('option');
                        option_6_1_1.value = "";
                        option_6_1_1.textContent = "Choose...";

                        var option_6_1_2 = document.createElement('option');
                        option_6_1_2.textContent = "United States";

                    select_6_1.appendChild(option_6_1_1);
                    select_6_1.appendChild(option_6_1_2);

                    //div
                    var div_6_1_1 = document.createElement('div');
                    div_6_1_1.className = "invalid-feedback";
                    div_6_1_1.textContent = "Please select a valid country.";

                div_6_1.appendChild(label_6_1);
                div_6_1.appendChild(select_6_1);
                div_6_1.appendChild(div_6_1_1);

                //div
                var div_6_2 = document.createElement('div');
                div_6_2.className = "col-md-4 mb-3";

                    //label
                    var label_6_2 = document.createElement('label');
                    label_6_2.for = "state";
                    label_6_2.textContent = "State";

                    //select
                    var select_6_2 = document.createElement('select');
                    select_6_2.className = "custom-select d-block w-100";
                    select_6_2.id = "state";
                    select_6_2.required = true;

                        //option
                        var option_6_2_1 = document.createElement('option');
                        option_6_2_1.value = "";
                        option_6_2_1.textContent = "Choose...";

                        var option_6_2_2 = document.createElement('option');
                        option_6_2_2.textContent = "California";

                    select_6_2.appendChild(option_6_2_1);
                    select_6_2.appendChild(option_6_2_2);

                    //div
                    var div_6_2_1 = document.createElement('div');
                    div_6_2_1.className = "invalid-feedback";
                    div_6_2_1.textContent = "Please select a valid state.";

                div_6_2.appendChild(label_6_2);
                div_6_2.appendChild(select_6_2);
                div_6_2.appendChild(div_6_2_1);

                //div
                var div_6_3 = document.createElement('div');
                div_6_3.className = "col-md-3 mb-3";

                    //label
                    var label_6_3 = document.createElement('label');
                    label_6_3.htmlFor = "zip";
                    label_6_3.textContent = "Zip";

                    //input
                    var input_6_3 = document.createElement('input');
                    input_6_3.className = "form-control";
                    input_6_3.type = "text";
                    input_6_3.id = "zip";
                    input_6_3.placeholder = "";
                    input_6_3.required = true;

                    //div
                    var div_6_3_1 = document.createElement('div');
                    div_6_3_1.className = "invalid-feedback";
                    div_6_3_1.textContent = "Zip code required";

                div_6_3.appendChild(label_6_3);
                div_6_3.appendChild(input_6_3);
                div_6_3.appendChild(div_6_3_1);

            div_6_form_val.appendChild(div_6_1);
            div_6_form_val.appendChild(div_6_2);
            div_6_form_val.appendChild(div_6_3);

            //hr
            var hr_1 = document.createElement('hr');
            hr_1.className = "mb-4";

            //div shipping
            var div_ship = document.createElement('div');
            div_ship.className = "custom-control custom-checkbox";

                //input
                var input_ship = document.createElement('input');
                input_ship.className = "custom-control-input";
                input_ship.type = "checkbox";
                input_ship.id = "same-address";

                //label
                var label_ship = document.createElement('label');
                label_ship.className = "custom-control-label";
                label_ship.htmlFor = "same-address";
                label_ship.textContent = "Shipping address is the same as my billing address";

            div_ship.appendChild(input_ship);
            div_ship.appendChild(label_ship);

            //div save
            var div_save = document.createElement('div');
            div_save.className = "custom-control custom-checkbox";

                //input
                var input_save = document.createElement('input');
                input_save.className = "custom-control-input";
                input_save.type = "checkbox";
                input_save.id = "save-info";

                //label
                var label_save = document.createElement('label');
                label_save.className = "custom-control-label";
                label_save.htmlFor = "save-info";
                label_save.textContent = "Save this information for next time";

            div_save.appendChild(input_save);
            div_save.appendChild(label_save);

            //hr
            var hr_2 = document.createElement('hr');
            hr_2.className = "mb-4";

            //En la pag del link esto es un h4
            var hr_3 = document.createElement('h4');
            hr_3.className = "mb-3";
            hr_3.textContent = "Payment";

            //div payment
            var div_pay = document.createElement('div');
            div_pay.className = "d-block my-3";

                //div
                var div_pay_1 = document.createElement('div');
                div_pay_1.className = "custom-control custom-radio";

                    //input
                    var input_pay_1 = document.createElement('input');
                    input_pay_1.className = "custom-control-input";
                    input_pay_1.type = "radio";
                    input_pay_1.id = "credit";
                    input_pay_1.name = "paymentMethod";
                    input_pay_1.checked = true;
                    input_pay_1.required = true;

                    //label
                    var label_pay_1 = document.createElement('label');
                    label_pay_1.className = "custom-control-label";
                    label_pay_1.htmlFor = "credit";
                    label_pay_1.textContent = "Credit card";

                div_pay_1.appendChild(input_pay_1);
                div_pay_1.appendChild(label_pay_1);

                //div
                var div_pay_2 = document.createElement('div');
                div_pay_2.className = "custom-control custom-radio";

                    //input
                    var input_pay_2 = document.createElement('input');
                    input_pay_2.className = "custom-control-input";
                    input_pay_2.type = "radio";
                    input_pay_2.id = "debit";
                    input_pay_2.name = "paymentMethod";
                    input_pay_2.required = true;

                    //label
                    var label_pay_2 = document.createElement('label');
                    label_pay_2.className = "custom-control-label";
                    label_pay_2.htmlFor = "debit";
                    label_pay_2.textContent = "Debit card";

                div_pay_2.appendChild(input_pay_2);
                div_pay_2.appendChild(label_pay_2);

                //div
                var div_pay_3 = document.createElement('div');
                div_pay_3.className = "custom-control custom-radio";

                    //input
                    var input_pay_3 = document.createElement('input');
                    input_pay_3.className = "custom-control-input";
                    input_pay_3.type = "radio";
                    input_pay_3.id = "paypal";
                    input_pay_3.name = "paymentMethod";
                    input_pay_3.required = true;

                    //label
                    var label_pay_3 = document.createElement('label');
                    label_pay_3.className = "custom-control-label";
                    label_pay_3.htmlFor = "paypal";
                    label_pay_3.textContent = "Paypal";

                div_pay_3.appendChild(input_pay_3);
                div_pay_3.appendChild(label_pay_3);

            div_pay.appendChild(div_pay_1);
            div_pay.appendChild(div_pay_2);
            div_pay.appendChild(div_pay_3);

            //div card
            var div_card = document.createElement('div');
            div_card.className = "row";

                //div
                var div_card_1 = document.createElement('div');
                div_card_1.className = "col-md-6 mb-3";

                    //label
                    var label_card_1 = document.createElement('label');
                    label_card_1.htmlFor = "cc-name";
                    label_card_1.textContent = "Name on card";

                    //input
                    var input_card_1 = document.createElement('input');
                    input_card_1.className = "form-control";
                    input_card_1.type = "text";
                    input_card_1.id = "cc-name";
                    input_card_1.placeholder = "";
                    input_card_1.required = true;

                    //small
                    var small_card_1 = document.createElement('small');
                    small_card_1.className = "text-muted";
                    small_card_1.textContent = "Full name as displayed on card";

                    //div
                    var div_card_1_1 = document.createElement('div');
                    div_card_1_1.className = "invalid-feedback";
                    div_card_1_1.textContent = "Name on card is required";

                div_card_1.appendChild(label_card_1);
                div_card_1.appendChild(input_card_1);
                div_card_1.appendChild(small_card_1);
                div_card_1.appendChild(div_card_1_1);

                //div
                var div_card_2 = document.createElement('div');
                div_card_2.className = "col-md-6 mb-3";

                    //label
                    var label_card_2 = document.createElement('label');
                    label_card_2.htmlFor = "cc-number";
                    label_card_2.textContent = "Credit card number";

                    //input
                    var input_card_2 = document.createElement('input');
                    input_card_2.className = "form-control";
                    input_card_2.type = "text";
                    input_card_2.id = "cc-number";
                    input_card_2.placeholder = "";
                    input_card_2.required = true;

                    //div
                    var div_card_2_1 = document.createElement('div');
                    div_card_2_1.className = "invalid-feedback";
                    div_card_2_1.textContent = "Credit card number is required";

                div_card_2.appendChild(label_card_2);
                div_card_2.appendChild(input_card_2);
                div_card_2.appendChild(div_card_2_1);

            div_card.appendChild(div_card_1);
            div_card.appendChild(div_card_2);

            //div last
            var div_last = document.createElement('div');
            div_last.className = "row";

                //div 
                var div_last_1 = document.createElement('div');
                div_last_1.className = "col-md-3 mb-3";

                    //label
                    var label_last_1 = document.createElement('label');
                    label_last_1.htmlFor = "cc-expiration";
                    label_last_1.textContent = "Expiration";

                    //input
                    var input_last_1 = document.createElement('input');
                    input_last_1.className = "form-control";
                    input_last_1.type = "text";
                    input_last_1.id = "cc-expiration";
                    input_last_1.placeholder = "";
                    input_last_1.required = true;

                    //div
                    var div_last_1_1 = document.createElement('div');
                    div_last_1_1.className = "invalid-feedback";
                    div_last_1_1.textContent = "Expiration date required";

                div_last_1.appendChild(label_last_1);
                div_last_1.appendChild(input_last_1);
                div_last_1.appendChild(div_last_1_1);

                //div 
                var div_last_2 = document.createElement('div');
                div_last_2.className = "col-md-3 mb-3";

                    //label
                    var label_last_2 = document.createElement('label');
                    label_last_2.htmlFor = "cc-cvv";
                    label_last_2.textContent = "CVV";

                    //input
                    var input_last_2 = document.createElement('input');
                    input_last_2.className = "form-control";
                    input_last_2.type = "text";
                    input_last_2.id = "cc-cvv";
                    input_last_2.placeholder = "";
                    input_last_2.required = true;

                    //div
                    var div_last_2_1 = document.createElement('div');
                    div_last_2_1.className = "invalid-feedback";
                    div_last_2_1.textContent = "Security code required";

                div_last_2.appendChild(label_last_2);
                div_last_2.appendChild(input_last_2);
                div_last_2.appendChild(div_last_2_1);

            div_last.appendChild(div_last_1);
            div_last.appendChild(div_last_2);

            //hr
            var hr_4 = document.createElement('hr');
            hr_4.className = "mb-4";

            //button
            var button_form = document.createElement('button');
            button_form.className = "btn btn-primary btn-lg btn-block";
            button_form.type = "submit";
            button_form.textContent = "Continue to checkout";

        form_val.appendChild(div_1_form_val);
        form_val.appendChild(div_2_form_val);
        form_val.appendChild(div_3_form_val);
        form_val.appendChild(div_4_form_val);
        form_val.appendChild(div_5_form_val);
        form_val.appendChild(div_6_form_val);
        form_val.appendChild(hr_1);
        form_val.appendChild(div_ship);
        form_val.appendChild(div_save);
        form_val.appendChild(hr_2);
        form_val.appendChild(hr_3);
        form_val.appendChild(div_pay);
        form_val.appendChild(div_card);
        form_val.appendChild(div_last);
        form_val.appendChild(hr_4);
        form_val.appendChild(button_form);

    div_form.appendChild(div_form_h4);
    div_form.appendChild(form_val);

    div_row.appendChild(div_form);
}

//body
var body = document.getElementsByTagName('body');
body[0].className = "bg-light";

var div_container = document.createElement('div');
div_container.className = "container";

divTitlePage(div_container);

div_row = document.createElement('div');
div_row.className = "row";

divYourCart(div_row);
divForm(div_row);

div_container.appendChild(div_row);

divFooterPage(div_container);

body[0].insertBefore(div_container, body[0].firstChild);
