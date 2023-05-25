using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using dcd_snla_admin_console.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace dcd_snla_admin_console.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IHttpClientFactory _httpClientFactory;

    public HomeController(ILogger<HomeController> logger, IHttpClientFactory httpClientFactory)
    {
        _logger = logger;
        _httpClientFactory = httpClientFactory;
    }

    [Authorize]
    public async Task<IActionResult> Index()
    {
        _logger.LogInformation(">>>>>>>>>>>>>>>>>>>>> INDEX >>>>>>>>>>>>>>");
        ViewBag.jwt = await HttpContext.GetTokenAsync("access_token");
        return View();
    }

    public IActionResult SignIn()
    {
        _logger.LogInformation(">>>>>>>>>>>>>>>>>>>>> SIGN IN >>>>>>>>>>>>>>");
        var scheme = OpenIdConnectDefaults.AuthenticationScheme;
        var redirectUrl = Url.ActionContext.HttpContext.Request.Scheme
         + "://" + Url.ActionContext.HttpContext.Request.Host;
        return Challenge(new AuthenticationProperties
        {
            RedirectUri = redirectUrl
        }, scheme);
    }

    public IActionResult LogOut()
    {
        _logger.LogInformation(">>>>>>>>>>>>>>>>>>>>> Sign Out >>>>>>>>>>>>>>");
        var scheme = OpenIdConnectDefaults.AuthenticationScheme;
        return SignOut(new AuthenticationProperties(), CookieAuthenticationDefaults.AuthenticationScheme, scheme);
    }

    public async Task<IActionResult> ApiCall()
    {
        _logger.LogInformation(">>>>>>>>>>>>>>>>>>>>> APICALL >>>>>>>>>>>>>>");
        var accessToken = await HttpContext.GetTokenAsync("access_token");
        _logger.LogInformation(accessToken);
        var client = _httpClientFactory.CreateClient();
        var req = new HttpRequestMessage(HttpMethod.Get, "https://localhost:5001/api/v1/admin/greetings");
        req.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(JwtBearerDefaults.AuthenticationScheme, accessToken);
        var res = await client.SendAsync(req);
        if (res.StatusCode != System.Net.HttpStatusCode.OK)
        {
            //issue
        }
        return Content(res.ToString());
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
