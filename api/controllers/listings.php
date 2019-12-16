<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include_once __DIR__ . "/../models/listing.php";

if ($_REQUEST["action"]=== "index") {
  echo json_encode(Listings::all());
} elseif ($_REQUEST["action"]=== "create") {

  $request_body = file_get_contents("php://input");
  $body_object = json_decode($request_body);
  $new_listing = new Listing(null, $body_object->listingDate, $body_object->company, $body_object->position, $body_object->positionURL, $body_object->notes, $body_object->status, $body_object->applyDate, $body_object->applyFdate, $body_object->interviewDate, $body_object->interviewFdate, $body_object->tryAgainDate);

  $all_listings = Listings::create($new_listing);

  echo json_encode($all_listings);

} elseif ($_REQUEST["action"]=== "update") {

  $request_body = file_get_contents("php://input");
  $body_object = json_decode($request_body);
  $updated_listing = new Listing($_REQUEST["id"], $body_object->listingDate, $body_object->company, $body_object->position, $body_object->positionURL, $body_object->notes, $body_object->status, $body_object->applyDate, $body_object->applyFdate, $body_object->interviewDate, $body_object->interviewFdate, $body_object->tryAgainDate);

  $all_listings = Listings::update($updated_listing);

  echo json_encode($all_listings);

} elseif ($_REQUEST["action"]=== "delete") {
  $all_listings = Listings::delete($_REQUEST["id"]);
  echo json_encode($all_listings);
} elseif ($_REQUEST["action"]==="test"){
  echo 'test';
}

?>
