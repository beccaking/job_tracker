<?php
$dbconn = pg_connect("host=localhost dbname=jobtracker");

// $dbconn = pg_connect(getenv("DATABASE_URL"));

class Listing{
  public $id;
  public $listingDate;
  public $company;
  public $position;
  public $positionURL;
  public $notes;
  public $status;
  public $applyDate;
  public $applyFdate;
  public $interviewDate;
  public $interviewFdate;
  public $tryAgainDate;
  public function __construct
  ($id, $listingDate, $company, $position, $positionURL, $notes,
    $status, $applyDate, $applyFdate, $interviewDate, $interviewFdate, $tryAgainDate){
    $this->id = $id;
    $this->listingDate = $listingDate;
    $this->company = $company;
    $this->position = $position;
    $this->positionURL = $positionURL;
    $this->notes = $notes;
    $this->status = $status;
    $this->applyDate = $applyDate;
    $this->applyFdate = $applyFdate;
    $this->interviewDate = $interviewDate;
    $this->interviewFdate = $interviewFdate;
    $this->tryAgainDate = $tryAgainDate;
  }
}

class Listings{
  static function create($listing){
    $query = "INSERT INTO listings (company, position, positionurl, notes, listingDate) VALUES ($1, $2, $3, $4, $5)";
    $query_params = array($listing->company, $listing->position, $listing->positionURL, $listing->notes, $listing->listingDate);
    pg_query_params($query, $query_params);

    return self::all();
  }

  static function update($updated_listing){
    $query = "UPDATE listings SET company = $1, position = $2, positionurl = $3, notes = $4, status = $5, applyDate = $6, interviewDate = $7, tryAgainDate = $8 WHERE id = $9";
    $query_params = array($updated_listing->company, $updated_listing->position, $updated_listing->positionURL, $updated_listing->notes, $updated_listing->status, $updated_listing->applyDate, $updated_listing->interviewDate, $updated_listing->tryAgainDate, $updated_listing->id);
    pg_query_params($query, $query_params);

    return self::all();
  }

  static function delete($id){
    $query = "DELETE FROM listings WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);

    return self::all();
  }

  static function all(){
    $listings = array();

    $results = pg_query("SELECT * FROM listings ORDER BY listings.listingDate");

    $row_object = pg_fetch_object($results);
    while ($row_object) {
      $new_listing = new Listing(
        intval($row_object->id),
        date("m-d-Y", strtotime($row_object->listingdate)),
        $row_object->company,
        $row_object->position,
        $row_object->positionurl,
        $row_object->notes,
        $row_object->status,
        date("m-d-Y", strtotime($row_object->applydate)),
        date("m-d-Y", strtotime($row_object->applyfdate)),
        date("m-d-Y", strtotime($row_object->interviewdate)),
        date("m-d-Y", strtotime($row_object->interviewfdate)),
        date("m-d-Y", strtotime($row_object->tryagaindate))
      );
      $listings[] = $new_listing;

      $row_object = pg_fetch_object($results);
    }
    return $listings;


  }
}

?>
