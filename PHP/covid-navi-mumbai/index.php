<?php
        include_once 'getData.php';
    ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Live COVID-19 tracker | Navi mumbai</title>
    <meta charset="UTF-8" />
    <meta name="description" content="Mumbai has reached almost 10,000 cases, which means it is the most contaminated zone in maharastra. Beside that there is a town known as Navi Mumbai. To get information about navi mumbai, we came up  with this website showing all the gatherable information related to COVID-19 from navi mumbai. To get more information, get on to this website">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="coronavirus tracker, coronavirus live tracker, coronavirus cases tracker, coronavirus, coronavirus tracker map, coronavirus india tracker, coronavirus tracker in india, covid 19 tracker, covid 19 tracker in india, covid 19 india tracker, covid 19 cases tracker, covid 19 map tracker in india, corona cases live tracker, made by zaid, Zaid ajani, Covid-19 pandemic tracker for navi mumbai, made by a child, COVID-19 cases in navi mumbai, corona cases in navi mumbai, live corona tracker, live COVID-19 tracker, corona in india, COVID-19 in india, covidnavimumbai.in, covid navi mumbai, covid-19 in navi mumbai, covid navi mumbai.in, COVID-19 in navi mumbai"/>
    <meta name="title" content="Live COVID-19 tracker | Navi mumbai" />
    <link rel="shortcut icon" type="image/png" href="img/favicon4.png" />
    <link rel="stylesheet" type="text/css" href="design.css">
  </head>

  

  <body>
      
      
      <ul>
          <a href="https://covidnavimumbai.in/home/home.html">back to home</a>
      </ul>




    <div class="a">
      <h1>navi mumbai<br>
         COVID-19
    </h1>
    </div>
    
    
    
    <div class="b">
      <p>Total</p>
      <h1>5,853</h1><sup>+224</sup>
    </div>

  <div class="o">
    <p>Active</p>
    <h1>2,365</h1>
  </div>

  <div class="mn">
  <p>Recovered</p>
    <h1>3,294</h1>
  </div>

    <div class="e">
      <p>Deceased</p>
      <h1>194</h1>
    </div>
    
    


    <p><button onclick="sortTable()">SORT</button></p>



    <table  id="myTable" class="x">
        <tr>
            <th>
              Places
            </th>
            <th>
                Total cases
            </th>
            <th>
                Deceased
            </th>
        </tr>
        <?php
        $sort = 'ASC';
        $sql = "SELECT * FROM case_data;";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);

        if ($resultCheck > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
              echo "<tr><td>" . $row["places"] . "</td><td>" . $row["total cases"]. "</td><td>" . $row["deceased"] . "</td><tr>";
            }
        }

    ?>
    </div>
  </table>

    <script src="script.js"></script>

  <br>
  <br>

  <table>
    <tr>
      <th class="j">
        Total:
      </th>
      <th class="k">
        5,853 Cases
      </th>
      <th class="m">
        194
            <br>
        Deaths
      </th>
    </tr>
  </table>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>


        <a href="https://www.youtube.com/channel/UCEiSZQVVHKaC89N5gp7p4qQ" class="n">
           <button>Get Us Here</button>
      </a>
      <br>
      <br>
      <br>
        <a href="https://www.youtube.com/channel/UC32sBdBJI4XoINhOyEMW6YQ" class="n">
           <button>Get Us Here Too!</button>
      </a>
        
     <br>
     <br>
     <br>
     <br>

     <p>*Data colected from the website of <a href="https://nmmc.gov.in/navimumbai/">NMMC</a>
     <br>
     <p>Created by Zaid Ajani</p>
     
     
     <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-167373688-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-167373688-1');
</script>




  </body>
</html>
