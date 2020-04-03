import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils/utils.service';
import Utils from '../utils/utils';

@Component({
  selector: 'app-array-cardio-one',
  templateUrl: './array-cardio-one.component.html',
  styleUrls: ['./array-cardio-one.component.scss']
})
export class ArrayCardioOneComponent implements OnInit {

  inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  inventorsString = [];

  people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  peopleLast = [];

  data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

  boulevards = [
    'Boulevard Auguste-Blanqui',
    'Boulevard Barbès',
    'Boulevard Beaumarchais',
    "Boulevard de l'Amiral-Bruix",
    'Boulevard des Capucines',
    'Boulevard de la Chapelle',
    'Boulevard de Clichy',
    'Boulevard du Crime',
    'Boulevard Haussmann',
    "Boulevard de l'Hôpital",
    'Boulevard des Italiens',
    'Boulevard de la Madeleine',
    'Boulevard de Magenta',
    'Boulevard Montmartre',
    'Boulevard du Montparnasse',
    'Boulevard Raspail',
    'Boulevard Richard-Lenoir',
    'Boulevard de Rochechouart',
    'Boulevard Saint-Germain',
    'Boulevard Saint-Michel',
    'Boulevard de Sébastopol',
    'Boulevard de Strasbourg',
    'Boulevard du Temple',
    'Boulevard Voltaire',
    'Boulevard de la Zone'
  ]

  constructor() { }

  ngOnInit() {
    for (let person of this.inventors) {
      this.inventorsString.push((JSON.stringify(person)));
    }

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const filteredInv = this.inventors.filter((inv) => {
      if (inv.year >= 1500 && inv.year <= 1599) { return true }
    })

    console.log(`List of inventors for those who were born in the 1500's:`);
    console.log(filteredInv);
    console.log(`--------------------------------------------------------------`);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const fAndLName = this.inventors.map((inv) => {
      return {
        first: inv.first,
        last: inv.last
      }
    })
    console.log(`Array of inventors' first and last name: `);
    console.log(fAndLName);
    console.log(`--------------------------------------------------------------`);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const sorted = this.inventors.sort((a, b) => {
      return b.year - a.year;
    });
    console.log(`Inventors by birthdate, oldest to youngest: `);
    console.log(sorted);
    console.log(`--------------------------------------------------------------`);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = this.inventors.reduce((accum, curr) => {
      const yearsLived = curr.passed - curr.year
      return accum + yearsLived;
    }, 0)
    console.log(`Total number of years all investors lived: `);
    console.log(`${(totalYears)}`);
    console.log(`--------------------------------------------------------------`);

    // 5. Sort the inventors by years lived
    // provide callback function that puts the longer-lived at the end (i.e. b - a)
    const sortByYearsLived = this.inventors.sort((a, b) => {
      return ((a.passed - a.year) - (b.passed - b.year))
    })
    console.log(`Investors by number of years lived: `);
    console.log(sortByYearsLived);
    console.log(`--------------------------------------------------------------`);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    const deTest = /de/
    const de = this.boulevards.filter((b) => {
      return deTest.test(b);
    })
    console.log(`Boulevards with 'de' anywhere in name `);
    console.log(de);
    console.log(`--------------------------------------------------------------`);

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // create new array with sorted 
    const peopleSort = this.people.sort((prev, next) => {
      const [aPrev, aNext] = prev.split(', ');
      const [bPrev, bNext] = next.split(', ');
      return aPrev > bPrev ? 1 : -1; // <-- converts to number for sorting
    });
    console.log(`People sorted by last name: `);
    console.log(peopleSort);
    console.log(`--------------------------------------------------------------`);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
    const dataUnique = data.reduce((obj, item, i) => {
      // console.log(obj);
      // console.log(item);
      // console.log(!obj[item]);

      if (!obj[item] && obj[item] !== 0) {
        obj[item] = 1;
      } else {
        obj[item]++;
      }

      // Better way:
      // if (!obj[item]) {
      //   obj[item] = 0;
      // }
      // obj[item]++;


      return obj
    }, {})

    console.log(`Total number in each transportation category `);
    console.log(dataUnique);
    console.log(`--------------------------------------------------------------`);

  }

}
