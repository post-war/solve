using OpenQA.Selenium;
using OpenQA.Selenium.Edge;

namespace EdgeDriverSample
{
    class Program
    {
        static void Main(string[] args)
        {
            var service = EdgeDriverService.CreateDefaultService();
            service.UseVerboseLogging = true;
            var driver = new EdgeDriver(service);
            
            /* var options = new EdgeOptions();
            options.BinaryLocation = @"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe";
            //options.AddArguments("headless");
            //options.AddArguments("--remote-debugging-port=9515");
            var driver = new EdgeDriver(options); */
            try
            {
                driver.Url = "https://bing.com";

                var element = driver.FindElement(By.Id("sb_form_q"));
                element.SendKeys("WebDriver");
                element.Submit();

                Thread.Sleep(5000);
            }
            finally
            {
                driver.Quit();
            }
        }
    }
}
