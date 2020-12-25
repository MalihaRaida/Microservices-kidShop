using Newtonsoft.Json;
using RatingService.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace RatingService
{
    public class RatingRepository
    {
        private List<Rating> LoadData()
        {
            var dataString = File.ReadAllText("F:\\3-2\\SWE 4601(Software Design and Architecture)\\assignment 3\\Microservices-kidShop\\RatingService\\Data\\rating.json");
            return JsonConvert.DeserializeObject<List<Rating>>(dataString);
        }

        private void SaveData(List<Rating> data)
        {
            var dataString = JsonConvert.SerializeObject(data, Formatting.Indented);
            File.WriteAllText("F:\\3-2\\SWE 4601(Software Design and Architecture)\\assignment 3\\Microservices-kidShop\\RatingService\\Data\\rating.json", dataString);
        }

        internal int RetrieveTotalLength()
        {
            return LoadData().Count;
        }

        internal IEnumerable<Rating> RetrieveAll()
        {
            return LoadData();
        }

        internal void CreateRating(Rating rate)
        {
            var allRates = LoadData();
            var findRate = allRates.Find(c => c.productId == rate.productId && c.raterId==rate.raterId);
            if (findRate == null)
            {
                Console.WriteLine("New Rating");
                rate.Id = Guid.NewGuid();
                allRates.Add(rate);
                SaveData(allRates);
            }
            else
            {
                findRate.rating = rate.rating;
                SaveData(allRates);
            }

        }
    }
}
