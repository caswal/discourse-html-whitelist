export function setup(helper) {
    helper.registerOptions((opts, siteSettings)=>{
      opts.features['dropcaps'] = true; //!!siteSettings.dropcaps_enabled;
    });
  
    helper.allowList(["div[style]"]);
    helper.allowList(["div[class]"]);
    helper.allowList(["table[style]"]);
    helper.allowList(["table[class]"]);
    helper.allowList(["tr[style]"]);
    helper.allowList(["tr[class]"]);
    helper.allowList(["th[style]"]);
    helper.allowList(["th[class]"]);
    helper.allowList(["hr[style]"]);
    helper.allowList(["hr[class]"]);
    helper.allowList(["span[style]"]);	
    helper.allowList(["span[class]"]);	
    helper.allowList(["font[color]"]); 
    helper.allowList(["a[style]"]);	
  }
