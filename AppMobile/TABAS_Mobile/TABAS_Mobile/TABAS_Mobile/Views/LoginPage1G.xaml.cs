using Xamarin.Forms.Internals;
using Xamarin.Forms.Xaml;

using Newtonsoft.Json;
using System.Net.Http;
using TABAS_Mobile.ViewModels;

using System;
namespace TABAS_Mobile.Views
{
    /// <summary>
    /// Page to login with user name and password
    /// </summary>
    [Preserve(AllMembers = true)]
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginPage1G
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LoginPage1G" /> class.
        /// </summary>
        public LoginPage1G()
        {
            this.InitializeComponent();
        }
        static string accept;
        static User usercito;
        public void CallAPIsync()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("//");
            var user = client.GetAsync(Email.Text).Result;
            if (user.IsSuccessStatusCode)
            {
                var response = user.Content.ReadAsStringAsync().Result;
                usercito = JsonConvert.DeserializeObject<User>(response);
                if (usercito.password == PasswordEntry.Text)
                {
                    accept = "Si";
                }
            }
            else
            {
                accept = "no";
            }
        }
    }
}